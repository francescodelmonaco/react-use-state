import ButtonsList from "./ButtonsList";
import Card from "./Card";
import LanguagesArray from "../data/languages";

const Main = () => {

    const array = LanguagesArray;

    return (
        <main>
            <ButtonsList />
            <Card content={array} />
        </main>
    )
};

export default Main;