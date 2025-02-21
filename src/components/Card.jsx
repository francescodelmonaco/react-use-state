const Card = (props) => {

    const { key, title, content } = props;

    return (
        <div id={key} className="margin-60 card-container">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
};

export default Card;