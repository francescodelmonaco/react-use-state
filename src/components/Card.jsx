const Card = (props) => {

    const { content } = props;

    return (
        <div className="margin-60 card-container">
            {
                content.map((element) => {
                    const { id, title, description } = element;

                    return (
                        <>
                            <h2 key={id} >{title}</h2>
                            <p>{description}</p>
                        </>
                    );
                })
            }
        </div>
    )
};

export default Card;