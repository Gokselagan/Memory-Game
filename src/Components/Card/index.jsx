
import stylesheet from "./styles.css";


export const Card = ({card, index, handleClick}) => {

    return (
        <div className={`card ${card.status}`} onClick={()=>handleClick(index)}>
           <img src={card.img} alt={card.name}/>
        </div>
    )
}