import "./App.css";
import { ListofPlayers, Scorebelow70 } from "./ListofPlayers";
import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
  IndianPlayers,
  IndianTeam,
} from "./IndianPlayers";

function App() {
  const flag = false;

  if (flag) {
    return (
      <div>
        <ListofPlayers />
        <hr />
        <Scorebelow70 />
      </div>
    );
  }

  return (
    <div>
      <h1>Indian Team</h1>

      <h1>Odd Players</h1>
      {OddPlayers(IndianTeam)}

      <hr />

      <h1>Even Players</h1>
      {EvenPlayers(IndianTeam)}

      <hr />

      <h1>List of Indian Players Merged:</h1>
      <ListofIndianPlayers IndianPlayers={IndianPlayers} />
    </div>
  );
}

export default App;