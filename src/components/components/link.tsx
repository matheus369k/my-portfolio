import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<"a">{}

export function Link(props: LinkProps) {
    return (
        <a {...props} target="_blank" rel="noopener noreferrer" />
    )
}