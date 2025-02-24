const Card = (props) => {

    const { title, content } = props;

    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    )
};

export default Card;