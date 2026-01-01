"use client"

import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "../button"
import styles from "./ThemeToggle.module.scss"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted] = useState(() => true)

    if (!mounted) {
        return (
            <div className={styles.toggle}>
                <Button variant="ghost" size="sm" disabled>
                    Theme
                </Button>
            </div>
        )
    }

    const isDark = resolvedTheme === "dark"

    return (
        <div className={styles.toggle}>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                    setTheme(isDark ? "light" : "dark")
                }}
                className={styles.button}
                aria-label="Toggle theme"
            >
                {isDark ? "🌙" : "☀️"}
            </Button>
        </div>
    )
}
