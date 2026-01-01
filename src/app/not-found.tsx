import Link from "next/link"
import { Button } from "@shared/ui/button"
import { ThemeToggle } from "@shared/ui/ThemeToggle"
import styles from "./_styles/NotFound.module.scss"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
            <div className={styles.content}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.subtitle}>
                    The page you are looking for doesn&apos;t exist or has been
                    moved.
                </p>
                <div className={styles.actions}>
                    <Link href="/" prefetch={false}>
                        <Button>Go Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
