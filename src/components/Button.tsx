import type { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Variant = "primary" | "secondary" | "gost-destructive"
type ButtonProps = {
    // children: ReactNode,
    // disabled : boolean
    variant: Variant
} & ComponentProps<"button">
export default function Button({ variant= "primary", className, ...props }: ButtonProps) {
    return (
        <button
            {...props} 
            className={twMerge(getVariantStyles(variant), "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed", className)}>
            {/* {children} */}
        </button>
    )
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-violet-600 hover:bg-violet-500"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "gost-destructive":
            return "hover:bg-red-500 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Invalid variant: ${variant satisfies never}`)
    }
}