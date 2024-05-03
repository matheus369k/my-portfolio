import axios from "axios";
import React from "react";
import { HardSkill, MyProjects, PageStatus } from "../types/types";

export async function fetchJsonApi(
    pointy: string, 
    setProjects: React.Dispatch<React.SetStateAction<MyProjects[] | HardSkill[]>>, 
    setStatusPage: React.Dispatch<React.SetStateAction<PageStatus>>
) {
    try {
        const url = "./src/data/portfolio.json";
        await axios.get(url)
            .then((response) => {
                if (response.data[pointy] === undefined) {
                    throw new Error(`Error ao carregar os dados da seção ${pointy === "projects"
                        ? "Projetos"
                        : "Habilidades"
                        }`);
                }

                setProjects(response.data[pointy]);
                setStatusPage({ loadStatus: "compleat", showHide: false })
            })
    } catch (error) {
        setStatusPage({ loadStatus: "error", showHide: false })
    }
}