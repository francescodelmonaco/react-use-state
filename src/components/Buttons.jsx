const Buttons = (props) => {

    const { btn } = props;

    return (
        btn.map((element) => {
            const { id, title } = element;

            return (
                <button key={id} className="">{title}</button>
            );
        })
    );
};

export default Buttons;