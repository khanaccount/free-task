"use server"

import { loginSchema, registerSchema } from "./schemas"

type AuthResult = {
    success: boolean
    error?: string
    fieldErrors?: Record<string, string[]>
    user?: {
        id: string
        email: string
        name: string
    }
}

export async function loginAction(
    prevState: AuthResult | null,
    formData: FormData
): Promise<AuthResult> {
    const rawData = {
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const result = loginSchema.safeParse(rawData)

    if (!result.success) {
        const fieldErrors: Record<string, string[]> = {}
        result.error.issues.forEach((err) => {
            const field = err.path[0] as string
            if (!fieldErrors[field]) {
                fieldErrors[field] = []
            }
            fieldErrors[field].push(err.message)
        })

        return {
            success: false,
            error: result.error.issues[0]?.message || "Validation failed",
            fieldErrors,
        }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        success: true,
        user: {
            id: "1",
            email: result.data.email,
            name: "User",
        },
    }
}

export async function registerAction(
    prevState: AuthResult | null,
    formData: FormData
): Promise<AuthResult> {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const result = registerSchema.safeParse(rawData)

    if (!result.success) {
        const fieldErrors: Record<string, string[]> = {}
        result.error.issues.forEach((err) => {
            const field = err.path[0] as string
            if (!fieldErrors[field]) {
                fieldErrors[field] = []
            }
            fieldErrors[field].push(err.message)
        })

        return {
            success: false,
            error: result.error.issues[0]?.message || "Validation failed",
            fieldErrors,
        }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
        success: true,
        user: {
            id: "1",
            email: result.data.email,
            name: result.data.name,
        },
    }
}
