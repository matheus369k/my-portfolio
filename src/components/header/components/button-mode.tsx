import { ComponentProps } from "react";
import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";

interface ButtonModeProps extends ComponentProps<"img"> {
    themer: string
    visible?: boolean
}

export function ButtonMode({ visible, themer, ...props }: ButtonModeProps) {
    return (
        <button
            className={!visible
                ? "bg-gray-500 rounded-full"
                : ""
            }
            title={`Themer ${themer}`}
        >
            <img
                id={themer}
                {...props}
                src={themer === "dark" ? moon : sun}
                alt={`icon ${themer} Themer`}
                className={`size-10 ${visible
                    ? ""
                    : "opacity-0"}
            `}
            />
        </button>
    )
}