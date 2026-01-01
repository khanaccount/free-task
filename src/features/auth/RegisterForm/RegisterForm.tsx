"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { registerAction } from "@shared/lib/actions"
import { Button } from "@shared/ui/button"
import { Input } from "@shared/ui/input"
import styles from "./RegisterForm.module.scss"
import Link from "next/link"

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={pending}
            className={styles.submitButton}
        >
            {pending ? "Creating account..." : "Create account"}
        </Button>
    )
}

export function RegisterForm() {
    const [state, formAction] = useActionState(registerAction, null)

    return (
        <form action={formAction} className={styles.form}>
            <h1 className={styles.title}>Create account</h1>
            <p className={styles.subtitle}>
                Enter your information to get started
            </p>

            {state?.error && !state.fieldErrors && (
                <div className={styles.error}>{state.error}</div>
            )}

            <Input
                type="text"
                name="name"
                label="Name"
                placeholder="John Doe"
                required
                error={state?.fieldErrors?.name?.[0]}
            />

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
                Already have an account?{" "}
                <Link href="/login" className={styles.link}>
                    Sign in
                </Link>
            </p>
        </form>
    )
}
