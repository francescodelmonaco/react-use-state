const Card = (props) => {

    const { title, content } = props;

    return (
        <div className="margin-60 card-container">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
};

export default Card;