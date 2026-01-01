import { ThemeToggle } from "@shared/ui/ThemeToggle"
import styles from "./_styles/Loading.module.scss"

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
            <div className={styles.content}>
                <div className={styles.spinner}></div>
                <p className={styles.text}>Loading...</p>
            </div>
        </div>
    )
}
