import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdError } from "react-icons/md";

interface AlertMessageProps {
    isSent?: boolean
}

export function AlertMessage({isSent}:AlertMessageProps) {
    return (
        <div id="alert-message" className={`fixed rounded flex top-0 right-0 px-10 py-2 z-10 bg-gray-500 dark:bg-gray-900 border-l-2 border-l-gray-800 transition-all ${
            isSent ? "after:bg-green-500 text-green-500" : "after:bg-red-500 text-red-500"
        }`}>
        {isSent
            ? <IoIosCheckmarkCircle className="size-6 mr-1" />
            : <MdError className="size-6 mr-1" />
        }
            <span>{isSent ? "Enviado com Sucesso" : "Error ao Enviar"}!</span>
        </div>
    )
}