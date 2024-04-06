import { useRef, useState } from "react";
import { Card } from "../Card";
import { CardImages } from "../CardImages";
import stylesheet from "./styles.css";

export const Cards = () => {
  const [cards, setCards] = useState(CardImages.sort(() => Math.random() - .5));

  console.log("cart", cards);

  const [prevCardState, setPrevCardState] = useState(-1);
  const prevIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[prevCardState].id) {
      cards[prevCardState].status = "active matched"
      cards[currentCard].status = "active matched"
      setPrevCardState(-1)
    } else {
      cards[currentCard].status = "active"
      setCards([...cards]);
      setTimeout(() => {
        setPrevCardState(-1);
        cards[currentCard].status = "unmatch"
        cards[prevCardState].status = "unmatch"
        setCards([...cards]);
      }, 1000);
    }
  }

  const handleClick = (index) => {

    if (index !== prevIndex.current) {
      if (cards[index].status === "active matched") {
        alert("already matched");
      } else {
        if (prevCardState === -1) {
          prevIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPrevCardState(index);
        } else {
          matchCheck(index)
          prevIndex.current = -1;
        }
      }
    } else {
      alert("card currently selected");
    }

  }

  return (
    <div className="container">
      {cards.map((card, index) => {
        return <Card card={card} key={index} index={index} handleClick={handleClick} />
      })}
    </div>
  )
}