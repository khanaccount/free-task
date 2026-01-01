import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        rules: {
            // React rules
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react/display-name": "off",
            "react/no-unescaped-entities": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react-hooks/set-state-in-effect": "off",

            // TypeScript rules
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-empty-function": "warn",

            // Naming conventions
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variable",
                    format: ["camelCase", "PascalCase", "UPPER_CASE"],
                    leadingUnderscore: "allow",
                },
                {
                    selector: "function",
                    format: ["camelCase", "PascalCase"],
                },
                {
                    selector: "typeLike",
                    format: ["PascalCase"],
                },
                {
                    selector: "parameter",
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                },
                {
                    selector: "memberLike",
                    modifiers: ["private", "protected"],
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                },
                {
                    selector: "memberLike",
                    modifiers: ["public"],
                    format: ["camelCase", "PascalCase", "UPPER_CASE"],
                },
                {
                    selector: "enumMember",
                    format: ["UPPER_CASE"],
                },
                {
                    selector: "objectLiteralProperty",
                    format: null,
                },
            ],

            // General code quality
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "warn",
            "no-unused-vars": "off",
            "prefer-const": "warn",
            "no-var": "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
            curly: ["error", "all"],
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-new-func": "error",

            // Import rules
            "no-duplicate-imports": "error",
            "no-useless-rename": "warn",

            // Best practices
            "array-callback-return": "warn",
            "no-return-await": "error",
            "require-await": "warn",
            "no-await-in-loop": "warn",
        },
    },
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        "node_modules/**",
        ".yarn/**",
    ]),
])

export default eslintConfig
