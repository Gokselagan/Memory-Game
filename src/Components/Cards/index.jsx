import { Card } from "../Card";
import { CardImages } from "../CardImages";
import stylesheet from "./styles.css";

export const Cards = () => {
  const cards = CardImages.sort(() => Math.random() - .5);
  return (
    <div className="container">
      {cards.map((card, index) => {
        return <Card card={card} key={index} index={index} />
      })}
    </div>
  )
}