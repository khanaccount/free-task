import { LoginForm } from "@features/auth/LoginForm"
import { ThemeToggle } from "@shared/ui/ThemeToggle"
import styles from "./page.module.scss"

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
            <LoginForm />
        </div>
    )
}
