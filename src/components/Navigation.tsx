"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import styles from "./Navigation.module.scss";

interface NavItem {
  href: string;
  label: string;
  icon?: string;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Installation Guide", icon: "📦" },
  { 
    href: "#", 
    label: "Slides", 
    icon: "📊",
    children: [
      { href: "/day2", label: "Day 2: Git & Deployment", icon: "2️⃣" },
      { href: "/day3", label: "Day 3: Databases", icon: "3️⃣" },
    ]
  },
  { href: "/claude-code", label: "Claude Code Methods", icon: "💡" },
  { href: "/start-new-app", label: "Start New App", icon: "🚀" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveLink = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.children) {
      return item.children.some(child => pathname === child.href);
    }
    return pathname === item.href;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/white-rabbit-logo.png" 
              alt="White Rabbit Logo" 
              width={120} 
              height={50}
              className={styles.logo}
              priority
            />
          </div>
          <div className={styles.divider} />
          <div className={styles.brandText}>
            <div className={styles.brandTitle}>AI Masterclass</div>
            <div className={styles.brandSubtitle}>App Dev 101</div>
          </div>
        </div>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            item.children ? (
              <div key={item.label} className={styles.dropdown} ref={dropdownRef}>
                <button
                  className={`${styles.navLink} ${isActiveLink(item) ? styles.active : ""}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
                  <span className={styles.navLabel}>{item.label}</span>
                  <span className={styles.dropdownArrow}>▼</span>
                </button>
                {dropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`${styles.dropdownItem} ${
                          pathname === child.href ? styles.active : ""
                        }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.icon && <span className={styles.navIcon}>{child.icon}</span>}
                        <span className={styles.navLabel}>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isActiveLink(item) ? styles.active : ""
                }`}
              >
                {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}