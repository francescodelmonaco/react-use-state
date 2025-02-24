const Button = (props) => {
    const { id, title, onClick } = props;

    return (
        <button
            onClick={() => onClick(id)}
        >
            {title}
        </button>
    )
};

export default Button;