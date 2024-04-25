import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    moreProjects?: boolean
}

export function Button({moreProjects, ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={`bg-white/10 px-10 h-12 border border-white rounded-3xl transition-all hover:bg-white hover:text-black ${
                moreProjects 
                ? "w-max m-auto" 
                : ""
            }`} 
            type="button"
        />
    )
}