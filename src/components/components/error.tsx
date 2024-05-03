import { MdError } from "react-icons/md";

export function Error() {
    return (
        <div className="flex gap-2 w-max mx-auto text-black dark:text-white">
            <MdError className="size-8 -mt-0.5"/>
            <p className="font-extrabold text-xl">Error ao tentar carregar!!</p>
        </div>
    )
}