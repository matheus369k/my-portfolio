import { ComponentProps } from "react";

interface DivProps extends ComponentProps<"div">{}

export function Div(props: DivProps) {
    return (
        <div {...props} className="flex flex-col gap-2"/>
    )
}