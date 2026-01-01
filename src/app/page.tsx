import Link from "next/link"
import { Button } from "@shared/ui/button"
import { ThemeToggle } from "@shared/ui/ThemeToggle"
import styles from "./page.module.scss"

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Free Task</h1>
                <p className={styles.subtitle}>
                    Welcome to Free Task Application
                </p>
                <div className={styles.actions}>
                    <Link href="/login">
                        <Button>Sign in</Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="secondary">Sign up</Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
