import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("cyan");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("Brown")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Brown" }}
            >
              Brown
            </button>

            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("Orange")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => setColor("Black")}
              className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
