import { LuRefreshCw } from "react-icons/lu";

export function Loading() {
    return (
        <div className="flex gap-2 w-max mx-auto text-black dark:text-white">
            <LuRefreshCw className="size-14 -mt-1 animate-spin"/>
            <span className="font-extrabold text-5xl max-sm:text-3xl">Carregando...</span>
        </div>
    )
}