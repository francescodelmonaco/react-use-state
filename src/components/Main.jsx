import ButtonsList from "./ButtonsList";
import Card from "./Card";
import LanguagesArray from "../data/languages";
import { useState } from "react";


const Main = () => {

    const array = LanguagesArray;

    const [isSelected, setIsSelected] = useState(0);
    const handleCard = () => {
        setIsSelected(!isSelected);
    };

    return (
        <main>
            <ButtonsList onClick={handleCard} />

            {
                array.map((element) => {
                    const { id, title, description } = element;

                    return (
                        <Card key={id} title={title} content={description} />
                    )
                })
            }
        </main>
    )
};

export default Main;