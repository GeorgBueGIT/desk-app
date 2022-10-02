import Clock from "./Components/Clock";
import Notes from "./Components/Notes";
import background from "./Media/back.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` , height: "100vh" }}>
           <Clock/>
           <Notes/>
    </div>
  );
}

export default App;
