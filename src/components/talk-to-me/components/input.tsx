import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> { }

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            required
            autoFocus={false}
            autoComplete="off"
            className="bg-gray-500 dark:bg-black placeholder:text-gray-100 dark:placeholder:text-gray-500 border border-gray-500 pl-2.5 rounded-3xl h-12 w-[400px] outline-none focus:bg-auto focus:ring-transparent"
        />
    )
}