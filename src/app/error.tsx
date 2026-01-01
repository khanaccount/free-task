"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@shared/ui/button"
import { ThemeToggle } from "@shared/ui/ThemeToggle"
import styles from "./_styles/Error.module.scss"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className={styles.container}>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
            <div className={styles.content}>
                <div className={styles.errorIcon}>⚠️</div>
                <h1 className={styles.title}>Something went wrong!</h1>
                <p className={styles.subtitle}>
                    An unexpected error occurred. Please try again.
                </p>
                {error.digest && (
                    <p className={styles.digest}>Error ID: {error.digest}</p>
                )}
                <div className={styles.actions}>
                    <Button onClick={reset}>Try Again</Button>
                    <Link href="/">
                        <Button variant="secondary">Go Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
