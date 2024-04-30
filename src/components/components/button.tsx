import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({className, ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge("flex items-center bg-black/10 dark:bg-white/10 font-medium tracking-wider px-10 h-12 border border-gray-500 dark:border-white rounded-3xl transition-all  hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black shadow shadow-black w-max mx-auto max-sm:px-8 max-sm:h-10", className)}
        />
    )
}