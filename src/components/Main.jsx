import ButtonsList from "./ButtonsList";
import Card from "./Card";
import LanguagesArray from "../data/languages";

const Main = () => {

    const array = LanguagesArray;

    return (
        <main>
            <ButtonsList />

            {
                array.map((element) => {
                    return (
                        <Card key={element.id} title={element.title} content={element.description} />
                    )
                })
            }
        </main>
    )
};

export default Main;