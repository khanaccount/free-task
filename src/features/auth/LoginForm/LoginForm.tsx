"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { loginAction } from "@shared/lib/actions"
import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input"
import styles from "./LoginForm.module.scss"
import Link from "next/link"

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={pending}
            className={styles.submitButton}
        >
            {pending ? "Signing in..." : "Sign in"}
        </Button>
    )
}

export function LoginForm() {
    const [state, formAction] = useActionState(loginAction, null)

    return (
        <form action={formAction} className={styles.form}>
            <h1 className={styles.title}>Sign in</h1>
            <p className={styles.subtitle}>
                Enter your credentials to access your account
            </p>

            {state?.error && !state.fieldErrors && (
                <div className={styles.error}>{state.error}</div>
            )}

            <Input
                type="email"
                name="email"
                label="Email"
                placeholder="you@example.com"
                required
                error={
                    state?.fieldErrors?.email?.[0] ||
                    (state?.error && !state.fieldErrors
                        ? state.error
                        : undefined)
                }
            />

            <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                required
                error={state?.fieldErrors?.password?.[0]}
            />

            <SubmitButton />

            <p className={styles.footer}>
                Don&apos;t have an account?{" "}
                <Link href="/register" className={styles.link}>
                    Sign up
                </Link>
            </p>
        </form>
    )
}
