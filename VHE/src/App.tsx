import "./App.css";
import { tile_mode } from "./components/enums";
import { useState } from "react";
import MovableItem from "./components/movableItem.tsx";
import RadioCollection from "./components/radioCollection.tsx";
import ToggleButton from "./components/toggleButton.tsx";

function App() {
  const [deez, setDeez] = useState(false);

  return (
    <>
      <RadioCollection count={4} tile_mode={tile_mode.RIGHT} />

      <MovableItem
        id={"move1"}
        content={
          <div
            className={"move1"}
            style={{
              backgroundColor: `${deez ? "Green" : "Red"}`,
              borderRadius: "2em",
              padding: "2em",
              color: `${deez ? "White" : "Black"}`,
              transition: "all 1s ease-in-out",
              fontSize: `${deez ? "20px" : "15px"}`,
            }}
          >
            Custom style Movable Object With Link to Button
          </div>
        }
      />
      <MovableItem
        id={"move2"}
        content={
          <div
            className={"move2"}
            style={{
              backgroundColor: "Gray",
              borderRadius: "1em",
              padding: "1em",
              color: "yellow",
            }}
          >
            This is Test Button
            <ToggleButton
              func={() => {
                setDeez(!deez);
              }}
              state={deez}
              style={""}
            />{" "}
            Inside Movable Object
          </div>
        }
      />
    </>
  );
}

export default App;
