import { useState } from "react";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { Div } from "./components/div";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import { Button } from "../components/button";
import { AlertMessage } from "./components/alert-message"

interface Form {
    email: string
    from_name: string
    message: string
    isSent: boolean | null
}

interface SchemaEmailJS {
    serverId: string
    templateId: string
    templateParams: Form
    publicKey: string
}

export function TalkToMe() {
    const [form, setForm] = useState<Form>({
        email: "",
        from_name: "",
        message: "",
        isSent: null,
    });

    function handleSubmit() {
        event.preventDefault();
        const schemaEmailJS: SchemaEmailJS = {
            serverId: "service_6mh9etq",
            templateId: "template_o9dgbrh",
            templateParams: { ...form },
            publicKey: "PorBKxwawSuzoxtp9",
        };

        const { email, from_name, message } = schemaEmailJS.templateParams;

        if (email === "" || from_name === "" || message === "") return;

        emailjs.send(
            schemaEmailJS.serverId,
            schemaEmailJS.templateId,
            { ...schemaEmailJS.templateParams },
            schemaEmailJS.publicKey
        ).then(() => {
            setForm({
                email: "",
                from_name: "",
                message: "",
                isSent: true
            });
        }).catch(() => {
            return setForm({ ...form, isSent: false });
        });

        setTimeout(() => setForm({
            email: "",
            from_name: "",
            message: "",
            isSent: null
        }), 10000)
    }

    return (
        <section
            id="talk-me"
            className="flex flex-col items-center max-w-[1149px] mx-auto p-5 mt-16 max-md:mt-10"
        >
            {form.isSent !== null &&
                <AlertMessage isSent={form.isSent}/>
            }
            <h2 className="text-5xl max-sm:text-4xl mb-20">
                Fale Comigo
            </h2>
            <form
                method="post"
                onSubmit={handleSubmit}
                className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 items-end w-full gap-y-8 mx-auto"
            >
                <Div>
                    <Label htmlFor="email">E-Mail: </Label>
                    <Input
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        type="email"
                        id="email"
                        value={form.email}
                        placeholder="Digite seu E-mail..."
                    />
                </Div>
                <Div className="pl-8 max-sm:pl-0 max-sm:row-start-2">
                    <Label htmlFor="name">Nome: </Label>
                    <Input
                        onChange={(e) => setForm({ ...form, from_name: e.target.value })}
                        type="text"
                        id="name"
                        value={form.from_name}
                        placeholder="Digite seu Nome..."
                    />
                </Div>
                <Button
                    className="max-lg:col-span-3 max-lg:row-start-3 max-sm:row-start-4 mx-0 ml-auto max-lg:ml-0"
                    title="Enviar o e-mail"
                    type="submit"
                >Enviar <IoSend className="ml-1" /></Button>

                <Div className="col-span-3">
                    <Label htmlFor="message">Mensagem: </Label>
                    <textarea
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        id="message"
                        cols={30}
                        rows={5}
                        required
                        value={form.message}
                        placeholder="Digite sua Mensagem..."
                        className="bg-gray-500 dark:bg-black placeholder:text-gray-100 dark:placeholder:text-gray-500 border border-gray-500 rounded-xl p-5 outline-none h-72 max-lg:h-40 max-lg:row-span-2"
                    >
                    </textarea>
                </Div>
            </form>
        </section>
    )
}