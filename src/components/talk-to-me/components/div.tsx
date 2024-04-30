import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface DivProps extends ComponentProps<"div">{}

export function Div({className, ...props}: DivProps) {
    return (
        <div {...props} className={twMerge("flex flex-col w-full gap-2", className)}/>
    )
}