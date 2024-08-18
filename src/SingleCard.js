import './SingleCard.css'
//here we make a component instead of mapping it all together over there we take card as parameter so we can access the src 
export default function SingleCard({card,handleChoice}) {
    const handleClick=()=>{
        handleChoice(card)
    }
  return (
    <div className='card'>
            <img class="front" src={card.src} alt='front'></img>
            <img class="back" src="/img/cover.png" alt='back' onClick={handleClick}></img>
    </div>
  )
}
