import "./App.css";

import Card from "./Components/Card";
function App() {
  const cards = [0, 1, 2];

  return (
    <div className="App row centered">
      {cards.map((_, i) => (
        <Card imgNumber={i} />
      ))}
    </div>
  );
}

export default App;
