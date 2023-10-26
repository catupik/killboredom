import { useEffect, useState } from "react";
import video from "./video.mp4";
import "./App.css";

function App() {
  const [myAdvice, setMyAdvice] = useState("");

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    try {
      const response = await fetch(`https://www.boredapi.com/api/activity/`);
      const data = await response.json();
      setMyAdvice(data.activity);
    } catch (error) {
      console.error("Couldnt get data, error");
    }
  };
  return (
    <div className="App">
      <div>
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>

      <div className="advice">
        <div className="container">
          <button onClick={getAdvice}>kill the boredom</button>
        </div>
        <div className="container">
          <h2>{myAdvice}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
