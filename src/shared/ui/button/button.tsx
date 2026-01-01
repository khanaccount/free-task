"use client"

import * as React from "react"
import * as Slot from "@radix-ui/react-slot"
import { cn } from "@shared/lib/utils"
import styles from "./button.module.scss"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot.Root : "button"
        return (
            <Comp
                className={cn(
                    styles.button,
                    styles[variant],
                    styles[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
