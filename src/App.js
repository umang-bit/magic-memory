import { useState } from 'react'
import './App.css'
//first we will need an array of cards or you can say there image sources there are 6 of them
const arr =[
  {src :"img/helmet-1.png"},
  {src :"img/potion-1.png"},
  {src :"img/ring-1.png"},
  {src :"img/scroll-1.png"},
  {src :"img/shield-1.png"},
  {src :"img/sword-1.png"},

]


function App() {
  const [cards,setCards] = useState([])//initially we keep an empty array
  const [turns,setTurns]= useState(0)//we also need to count states
  //then we need a function which does 3 things for us, first is that we need 2 of each of these ards in our array , then we need to shuffle the arrays,
//and provide unique ids to each of these arrays.
const shuffleCards=()=>{
  //what this does is that it spreads all the content of the array into this array and we do this twice as we need 2 of each cards
  const shuffledCards =[...arr,...arr].sort(()=>Math.random()-0.5).map((card)=>({...card,id:Math.random()}))
  //the sort function sorts or swaps 2 cards when Math.random()-0.5 comes out to be positve so as it is random the cards get shuffled
  //the next line just adds id property to the cards.
  //after all this we update the state and make turns 0 
  setCards(shuffledCards)
  setTurns(0)
  //we ll call this entire function when new game is clicked


  console.log(cards,turns)
}
  return (
    //here on the 5th line we added the card grid make a div of card grid class so we can use css later
    //within it we will use map function on the state cards and take card as parameter and for each card we will return
    //another div of classname card and key = card.id within it just return the front and back image of the card.
    //also we need to give it some styling
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      
      <div className='card-grid'>
        {cards.map(card=>(
          <div className='card' key={card.id}>
            <img class="front" src={card.src} alt='front'></img>
            <img class="back" src="/img/cover.png" alt='back'></img>
          </div>
        ))

        }
      </div>
    </div>
  );
}

export default App