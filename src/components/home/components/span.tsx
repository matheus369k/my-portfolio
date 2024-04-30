import { ComponentProps } from "react";

interface SpanProps extends ComponentProps<"span">{}

export function Span(props: SpanProps) {
    return (
        <span {...props} className="relative w-max text-6xl max-sm:text-5xl font-extrabold first-letter:text-blue-900 m-auto" />
    )
}