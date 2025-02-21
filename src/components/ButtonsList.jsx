import LanguagesArray from "../data/languages";

const ButtonList = (props) => {

    const array = LanguagesArray;
    const { onClick } = props;

    return (
        <div className="margin-60 button-list">
            {
                array.map((element) => {
                    const { id, title } = element;

                    return (
                        <button key={id} onClick={() => onClick(id)}>{title}</button>
                    );
                })
            }
        </div>
    )
};

export default ButtonList;