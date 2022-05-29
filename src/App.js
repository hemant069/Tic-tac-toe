import SquareComponents from "./SquareComponents";
import React,{useState,useEffect} from "react";


const initial=["","","","","","","","",""]
function App() {
  const [Game, setGame] = useState(initial)
  const [IsxChance, setIsxChance] = useState(false)
  const onSquareClicked=(index)=>{
    let strings=Array.from(Game);
    strings[index]=IsxChance ? "X":"0";
    setGame(strings)
    setIsxChance(!IsxChance);
  }

  useEffect(()=>{
    const winner=Checkwinner();
    if(winner){
      alert(`${winner} has won the Game`)
      setGame(initial)
    }
  },[Game])

  const Checkwinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (Game[a] && Game[a] === Game[b] && Game[a] === Game[c]) {
        return Game[a];
      }
    }
    return null;
  }
  



  return (
    <div className="app-header">
      <p className="heading-text">Tic Tac Toe</p>
      <div className="row jc-center">
        <SquareComponents className='b-bottom-right'Game={Game[0]} onClick={()=>onSquareClicked(0)} />
        <SquareComponents className='b-bottom-right' Game={Game[1]} onClick={()=>onSquareClicked(1)} />
        <SquareComponents className='b-bottom'Game={Game[2]} onClick={()=>onSquareClicked(2)}  />
      </div>
      <div className="row jc-center">
      <SquareComponents className='b-bottom-right' Game={Game[3]} onClick={()=>onSquareClicked(3)} />
      <SquareComponents className='b-bottom-right' Game={Game[4]} onClick={()=>onSquareClicked(4)} />
      <SquareComponents className='b-bottom'Game={Game[5]} onClick={()=>onSquareClicked(5)} />
      </div>
      <div className="row jc-center">
      <SquareComponents className='b-right'Game={Game[6]} onClick={()=>onSquareClicked(6)} />
      <SquareComponents className='b-right'Game={Game[7]} onClick={()=>onSquareClicked(7)} />
      <SquareComponents Game={Game[8]} onClick={()=>onSquareClicked(8)} />
     
      </div>
      <button className="clear-button" onClick={()=>setGame(initial)}>Clear Game</button>
      <p className="fc-aqua fw-600">Hemant</p>
    </div>
  );
}

export default App;
