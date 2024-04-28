import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    moreProjects?: boolean
}

export function Button({moreProjects, ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={`flex items-center bg-black/10 dark:bg-white/10 font-medium tracking-wider px-10 h-12 border border-gray-500 dark:border-white rounded-3xl transition-all  hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black shadow shadow-black ${
                moreProjects 
                ? "w-max m-auto" 
                : ""
            }`}
        />
    )
}