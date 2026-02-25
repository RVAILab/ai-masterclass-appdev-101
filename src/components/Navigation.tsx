"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

interface NavItem {
  href: string;
  label: string;
  icon?: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Installation Guide", icon: "📦" },
  { href: "/day2", label: "Day 2 Presentation", icon: "🎯" },
  { href: "/claude-code", label: "Claude Code Methods", icon: "💡" },
  { href: "/start-new-app", label: "Start New App", icon: "🚀" },
];

export default function Navigation() {
  const pathname = usePathname();

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
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              {item.icon && <span className={styles.navIcon}>{item.icon}</span>}
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}