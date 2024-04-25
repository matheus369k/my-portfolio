import { useState } from "react";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { Div } from "./components/div";
import emailjs from "@emailjs/browser";

interface Form {
    email: string
    from_name: string
    message: string
}

interface SchemaEmailJS {
    serverId: string
    templateId: string
    templateParams: Form
    publicKey: string
}

export function TalkToMe() {
    const [form, setForm] = useState<Form>();

    function handleSubmit() {
        event.preventDefault();
        const schemaEmailJS: SchemaEmailJS = {
            serverId: "service_6mh9etq",
            templateId: "template_o9dgbrh",
            templateParams: { ...form },
            publicKey: "PorBKxwawSuzoxtp9",
        };

        emailjs.send(
            schemaEmailJS.serverId,
            schemaEmailJS.templateId,
            { ...schemaEmailJS.templateParams },
            schemaEmailJS.publicKey
        ).then((response) => {
            console.log("Enviado", response.status, response.text)
        }, (reject) => {
            console.log("ERROR:", reject)
        });
    }

    return (
        <section id="talk-me" className="flex flex-col justify-center items-center pb-5 max-w-[1149px] mx-auto">
            <h2 className="text-5xl mb-20">
                Fale Comigo
            </h2>
            <form method="post" onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                <div className="flex justify-between items-end ">
                    <Div>
                        <Label htmlFor="email">E-Mail: </Label>
                        <Input
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            type="email"
                            id="email"
                            placeholder="Digite seu E-mail..."
                        />
                    </Div>
                    <Div>
                        <Label htmlFor="name">Nome: </Label>
                        <Input
                            onChange={(e) => setForm({ ...form, from_name: e.target.value })}
                            type="text"
                            id="name"
                            placeholder="Digite seu Nome..."
                        />
                    </Div>
                    <input
                        title="Enviar"
                        type="submit"
                        value="Enviar"
                        className="capitalize text-xl w-52 h-12 bg-white/10 border border-white rounded-3xl transition-all hover:bg-white hover:text-black cursor-pointer"
                    />
                </div>
                <Div>
                    <Label htmlFor="message">Mensagem: </Label>
                    <textarea
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        id="message"
                        cols={30}
                        rows={5}
                        required
                        placeholder="Digite sua Mensagem..."
                        className="bg-black text-gray-500 border border-gray-500 rounded-xl p-5 outline-none h-72"
                    >
                    </textarea>
                </Div>
            </form>
        </section>
    )
}