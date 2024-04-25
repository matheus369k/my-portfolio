import { ComponentProps } from "react";
import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";

interface ButtonModeProps extends ComponentProps<"img"> {
    themer: string
    visible?: boolean
}

export function ButtonMode({visible ,themer, ...props}: ButtonModeProps) {
    return (
    <button title={`Themer ${themer}`}>
        <img
            {...props}
            src={themer === "dark" ? moon: sun}
            alt={`icon ${themer} Themer`}
            className={`size-12 ${visible 
                ? "" 
                : "invisible"}
            `}
        />
    </button>
    )
}