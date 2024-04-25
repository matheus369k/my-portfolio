import { ComponentProps } from "react";

interface ListLinkProps extends ComponentProps<"a"> {
    visible?: boolean
}

export function ListLink({visible, ...props}: ListLinkProps) {
    return (
    <li className={visible ? "text-gray-200" : ""}>
        <a {...props} target="_parent" rel="noopener noreferrer"/>
    </li>
)
}