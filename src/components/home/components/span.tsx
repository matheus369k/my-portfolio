import { ComponentProps } from "react";

interface SpanProps extends ComponentProps<"span">{}

export function Span(props: SpanProps) {
    return (
        <span {...props} className="text-6xl text-center" />
    )
}