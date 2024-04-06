
import stylesheet from "./styles.css";


export const Card = ({card, index}) => {

    return (
        <div className="card">
           <img src={card.img} alt={card.name}/>
        </div>
    )
}