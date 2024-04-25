import axios from "axios";
import React from "react";
import { HardSkill, MyProjects } from "../types/types";

export function featchJsonApi(
    pointy: string,
    setState: React.Dispatch<React.SetStateAction<MyProjects[] | HardSkill[]>>
) {
    const url = "./src/data/portfolio.json";

    axios.get(url)
        .then((response) => {
            setState(response.data[pointy]);
        }, (reject) => {
            console.log("ERROR:", reject)
        })
}