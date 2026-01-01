"use client"

import { useEffect } from "react"
import { Button } from "@shared/ui/button"
import styles from "./_styles/GlobalError.module.scss"

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error("Global error:", error)
    }, [error])

    return (
        <html>
            <body>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.errorIcon}>💥</div>
                        <h1 className={styles.title}>Critical Error</h1>
                        <p className={styles.subtitle}>
                            A critical error occurred. Please refresh the page
                            or contact support.
                        </p>
                        {error.digest && (
                            <p className={styles.digest}>
                                Error ID: {error.digest}
                            </p>
                        )}
                        <div className={styles.actions}>
                            <Button onClick={reset}>Try Again</Button>
                            <Button
                                variant="secondary"
                                onClick={() => window.location.reload()}
                            >
                                Reload Page
                            </Button>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}
