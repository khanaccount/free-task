"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@shared/lib/utils"
import styles from "./input.module.scss"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: string
}

const EyeIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 3.75C5.83333 3.75 2.275 6.34167 0.833333 10C2.275 13.6583 5.83333 16.25 10 16.25C14.1667 16.25 17.725 13.6583 19.1667 10C17.725 6.34167 14.1667 3.75 10 3.75ZM10 14.1667C7.7 14.1667 5.83333 12.3 5.83333 10C5.83333 7.7 7.7 5.83333 10 5.83333C12.3 5.83333 14.1667 7.7 14.1667 10C14.1667 12.3 12.3 14.1667 10 14.1667ZM10 7.5C8.61667 7.5 7.5 8.61667 7.5 10C7.5 11.3833 8.61667 12.5 10 12.5C11.3833 12.5 12.5 11.3833 12.5 10C12.5 8.61667 11.3833 7.5 10 7.5Z"
            fill="currentColor"
        />
    </svg>
)

const EyeOffIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.5 2.5L17.5 17.5M8.33333 8.33333L11.6667 11.6667M12.0833 7.91667C12.775 8.60833 13.3333 9.44167 13.3333 10.4167C13.3333 12.7167 11.4667 14.5833 9.16667 14.5833C8.19167 14.5833 7.35833 14.025 6.66667 13.3333M6.66667 13.3333L4.16667 15.8333C2.275 13.6583 0.833333 10 0.833333 10C2.275 6.34167 5.83333 3.75 10 3.75C11.975 3.75 13.75 4.30833 15.25 5.25L12.75 7.75M6.66667 13.3333L4.16667 15.8333M12.75 7.75L15.25 5.25M12.75 7.75L10.25 10.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, type = "text", ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false)
        const isPassword = type === "password"
        const inputType = isPassword && showPassword ? "text" : type

        return (
            <div className={styles.wrapper}>
                {label && <label className={styles.label}>{label}</label>}
                <div className={styles.inputContainer}>
                    <input
                        type={inputType}
                        className={cn(
                            styles.input,
                            error && styles.error,
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    {isPassword && (
                        <button
                            type="button"
                            className={styles.toggleButton}
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={
                                showPassword ? "Hide password" : "Show password"
                            }
                            tabIndex={-1}
                        >
                            {showPassword ? (
                                <EyeOffIcon className={styles.icon} />
                            ) : (
                                <EyeIcon className={styles.icon} />
                            )}
                        </button>
                    )}
                </div>
                {error && <span className={styles.errorMessage}>{error}</span>}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
