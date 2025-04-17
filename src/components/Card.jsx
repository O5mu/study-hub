function Card(){
    const cards= [
        {name:"",description:"",alt:"",src:""},
        {name:"",description:"",alt:"",src:""},
        {name:"",description:"",alt:"",src:""}
    ]
    return(
        <div className="card">
            {cards.map(card,index => (
            <div>
                <img alt={card.alt} src={card.src}></img>
                <h2>{card.name}</h2>
                <p>{card.description}</p>
            </div>
            ))}
        </div>
    )
}
export default Card;