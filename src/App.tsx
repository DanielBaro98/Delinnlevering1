import { Routes, Route, Link } from "react-router-dom";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";
import PlayersPage from "./pages/PlayerPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Game</Link>
        <Link to="/rules">Rules</Link>
        <Link to="/players">Players</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/players" element={<PlayersPage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
