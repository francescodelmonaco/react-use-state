import Button from "./Button";
import Card from "./Card";
import LanguagesArray from "../data/languages";
import { useState } from "react";

const Main = () => {
    const array = LanguagesArray;

    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const handleCard = (id) => {
        setSelectedLanguage(selectedLanguage === id ? null : id);
    };

    return (
        <main>
            <div className="margin-60 button-list">
                {
                    array.map((element) => {
                        const { id, title } = element;

                        return (
                            <Button
                                key={id}
                                title={title}
                                id={id}
                                onClick={handleCard}
                            />
                        )
                    })
                }
            </div>

            {
                array.map((element) => {
                    const { id, title, description } = element;

                    if (id === selectedLanguage) {
                        return (
                            <div className="margin-60 card-container">
                                <Card
                                    key={id}
                                    title={title}
                                    content={description}
                                />
                            </div>
                        )
                    } else {
                        return null
                    }
                })
            }
        </main>
    )
};

export default Main;