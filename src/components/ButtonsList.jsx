import LanguagesArray from "../data/languages";
import Buttons from "./Buttons";

const ButtonList = () => {

    const array = LanguagesArray;

    return (
        <div className="margin-60 button-list">
            <Buttons btn={array} />
        </div>
    )
};

export default ButtonList;