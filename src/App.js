import React, { useEffect } from "react"
import "materialize-css"
import { useDispatch } from "react-redux"
import { Game } from "./components/Game"





function App() {

  return (
    <div className="all">
      <Game />
    </div>
  );
}

export default App;

