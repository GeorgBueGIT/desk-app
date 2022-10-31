import Clock from "./Components/Clock";
import Notes from "./Components/Notes";
import background from "./Media/back.png";
import Login from "./Components/Login";
import GoogleSearch from "./Components/GoogleSearch";
import Quicklinks from "./Components/Quicklinks";

function App() {

  return (
    <div style={{ backgroundImage: `url(${background})` , height: "100vh" }}>
        
           {/* <Login/>   */}
            {/* <Clock/>
            
           <Notes/> */}
           {/* <GoogleSearch/> */}
           <Quicklinks/>
    </div>
  );
}

export default App;
