import { ComponentProps } from "react";

interface ListLinkProps extends ComponentProps<"a"> {}

export function ListLink(props: ListLinkProps) {
    return (
    <li className="transition-all hover:text-gray-200">
        <a {...props} target="_parent" rel="noopener noreferrer"/>
    </li>
)
}