import type { Metadata } from "next"
import "@shared/styles/globals.scss"
import { ThemeProvider } from "@shared/lib/ThemeProvider"

export const metadata: Metadata = {
    title: "Free Task",
    description: "Free Task Application",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
