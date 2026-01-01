import { RegisterForm } from "@features/auth/RegisterForm"
import { ThemeToggle } from "@shared/ui/ThemeToggle"
import styles from "./page.module.scss"

export default function RegisterPage() {
    return (
        <div className={styles.container}>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
            <RegisterForm />
        </div>
    )
}
