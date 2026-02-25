export const colors = {
  // Background colors
  bgPrimary: "#0a0e14",
  bgSecondary: "#111827",
  bgCard: "rgba(255,255,255,0.015)",
  bgCardHover: "rgba(255,255,255,0.025)",
  bgChecked: "rgba(45, 106, 79, 0.06)",
  bgCodeBlock: "#111827",
  
  // Text colors
  textPrimary: "#e9ecef",
  textSecondary: "#868e96",
  textMuted: "#6c757d",
  textDimmed: "#4b5563",
  textCode: "#e0e0e0",
  
  // Accent colors
  accentGreen: "#40916c",
  accentGreenDark: "#2d6a4f",
  accentGreenLight: "#b7e4c7",
  accentBlue: "#74c0fc",
  accentYellow: "#ffd43b",
  
  // Border colors
  borderSubtle: "rgba(255,255,255,0.04)",
  borderLight: "rgba(255,255,255,0.06)",
  borderMedium: "rgba(255,255,255,0.12)",
  borderChecked: "rgba(45, 106, 79, 0.2)",
} as const;

export const fonts = {
  primary: "var(--font-dm-sans), 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
  code: "var(--font-jetbrains-mono), 'SF Mono', 'Fira Code', monospace",
} as const;

export const spacing = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  xxxl: 36,
  huge: 48,
} as const;

export const radii = {
  sm: 4,
  md: 6,
  lg: 10,
  xl: 12,
  full: 9999,
} as const;

export const styles = {
  // Layout styles
  pageWrapper: {
    minHeight: "100vh",
    background: colors.bgPrimary,
    color: colors.textPrimary,
    fontFamily: fonts.primary,
  },
  
  header: {
    background: `linear-gradient(170deg, ${colors.bgPrimary} 0%, ${colors.bgSecondary} 40%, ${colors.bgPrimary} 100%)`,
    borderBottom: `1px solid ${colors.borderSubtle}`,
    padding: `${spacing.huge}px ${spacing.xxl}px ${spacing.xxxl}px`,
    textAlign: "center" as const,
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  
  container: {
    maxWidth: 1080,
    margin: "0 auto",
    padding: `0 ${spacing.xxl}px`,
  },
  
  // Typography styles
  title: {
    fontSize: 40,
    fontWeight: 900,
    letterSpacing: "-0.03em",
    background: "linear-gradient(to bottom right, #ffffff 0%, #cbd5e1 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: spacing.lg,
  },
  
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: 400,
    letterSpacing: "-0.01em",
    maxWidth: 500,
    margin: "0 auto",
  },
  
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: colors.textMuted,
    marginBottom: spacing.xl,
    display: "flex" as const,
    alignItems: "center" as const,
    gap: spacing.md,
  },
  
  // Card styles
  card: {
    background: colors.bgCard,
    borderRadius: radii.lg,
    border: `1px solid ${colors.borderSubtle}`,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    transition: "all 0.2s ease",
  },
  
  cardHover: {
    background: colors.bgCardHover,
    borderColor: colors.borderLight,
  },
  
  // Button styles
  checkbox: {
    width: 22,
    height: 22,
    minWidth: 22,
    borderRadius: radii.md,
    border: `2px solid ${colors.borderMedium}`,
    background: "transparent",
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    marginTop: 1,
    transition: "all 0.15s ease",
    fontSize: 12,
    color: "#fff",
    cursor: "pointer" as const,
  },
  
  checkboxChecked: {
    border: `2px solid ${colors.accentGreen}`,
    background: colors.accentGreenDark,
  },
  
  osButton: {
    flex: 1,
    padding: `${spacing.lg}px ${spacing.xl}px`,
    background: "transparent",
    border: `1px solid ${colors.borderLight}`,
    borderRadius: radii.md,
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer" as const,
    transition: "all 0.15s ease",
    fontFamily: fonts.primary,
  },
  
  osButtonActive: {
    background: "rgba(255,255,255,0.03)",
    borderColor: colors.accentGreen,
    color: colors.textPrimary,
  },
  
  // Code block styles
  codeBlock: {
    position: "relative" as const,
    background: colors.bgCodeBlock,
    borderRadius: radii.lg,
    padding: `${spacing.lg + 2}px ${spacing.xl}px`,
    paddingRight: 70,
    marginTop: spacing.lg,
    border: `1px solid ${colors.borderLight}`,
    fontFamily: fonts.code,
    fontSize: 12.5,
    lineHeight: 1.75,
    color: colors.textCode,
    overflowX: "auto" as const,
    whiteSpace: "pre-wrap" as const,
    wordBreak: "break-all" as const,
  },
  
  copyButton: {
    position: "absolute" as const,
    top: spacing.md,
    right: spacing.md,
    background: "rgba(255,255,255,0.06)",
    border: `1px solid ${colors.borderLight}`,
    color: "#adb5bd",
    borderRadius: radii.md,
    padding: `${spacing.xs}px ${spacing.lg - 2}px`,
    fontSize: 11,
    cursor: "pointer" as const,
    fontFamily: "inherit",
    transition: "all 0.2s",
  },
  
  copyButtonCopied: {
    background: colors.accentGreenDark,
    color: colors.accentGreenLight,
  },
  
  // Progress bar styles
  progressBar: {
    height: 6,
    background: "rgba(255,255,255,0.03)",
    borderRadius: radii.full,
    overflow: "hidden" as const,
    marginTop: spacing.xl,
  },
  
  progressFill: (percentage: number) => ({
    height: "100%",
    width: `${percentage}%`,
    background: `linear-gradient(90deg, ${colors.accentGreen} 0%, #52b788 100%)`,
    borderRadius: radii.full,
    transition: "width 0.3s ease",
  }),
  
  // Badge styles
  badge: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    padding: `2px 7px`,
    borderRadius: radii.sm,
    marginLeft: spacing.md,
    verticalAlign: "middle" as const,
  },
  
  optionalBadge: {
    background: "rgba(255,255,255,0.04)",
    color: colors.textMuted,
  },
  
  fallbackBadge: {
    background: "rgba(255,212,59,0.08)",
    color: colors.accentYellow,
  },
  
  // Step item styles
  stepItem: {
    display: "flex" as const,
    gap: spacing.lg,
    padding: `${spacing.lg + 2}px ${spacing.xl}px`,
    background: colors.bgCard,
    borderRadius: radii.lg,
    cursor: "pointer" as const,
    border: `1px solid ${colors.borderSubtle}`,
    transition: "all 0.2s ease",
    marginBottom: spacing.sm,
  },
  
  stepItemChecked: {
    background: colors.bgChecked,
    border: `1px solid ${colors.borderChecked}`,
  },
  
  stepTitle: {
    fontWeight: 600,
    fontSize: 13.5,
    color: colors.textPrimary,
    marginBottom: 3,
    transition: "all 0.15s",
  },
  
  stepTitleChecked: {
    color: colors.textMuted,
    textDecoration: "line-through",
  },
  
  stepDetail: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 1.5,
  },
  
  stepLink: {
    display: "inline-block" as const,
    marginTop: spacing.md,
    fontSize: 13,
    color: colors.accentBlue,
    textDecoration: "none" as const,
    fontWeight: 500,
    borderBottom: `1px solid rgba(116,192,252,0.25)`,
    paddingBottom: 1,
  },
} as const;