import { ComponentProps } from "react";

interface LabelProps extends ComponentProps<"label">{}

export function Label(props: LabelProps) {
    return (
        <label {...props} className="capitalize text-xl" />
    )
}