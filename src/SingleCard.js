import './SingleCard.css'
//here we make a component instead of mapping it all together over there we take card as parameter so we can access the src 
export default function SingleCard({card,handleChoice,flipped}) {
    const handleClick=()=>{
        handleChoice(card)
    }
    //after 2 lines we have conditionally applied flipped class or not.
  return (
    <div className='card' >
            <div className={flipped? "flipped":""}>
            <img className="front" src={card.src} alt='front'></img>
            <img className="back" src="/img/cover.png" alt='back' onClick={handleClick}></img>
            </div>
    </div>
  )
}
