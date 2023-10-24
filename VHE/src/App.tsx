import "./App.css";
import { tile_mode } from "./components/enums";
import { useState } from "react";
import MovableItem from "./components/movableItem.tsx";
import RadioCollection from "./components/radioCollection.tsx";
import ToggleButton from "./components/toggleButton.tsx";
import OutputPopup from "./components/outputPopup.tsx";


import {getWindowDimensions} from "./components/windowTracker.tsx"

function App() {
  const [deez, setDeez] = useState(false);

  const windowDimension = getWindowDimensions()

  const canvasMinX = windowDimension.xLen * 0.04 //Position of the canvas
  const canvasMinY = 14 * 16 //Position of the canvas
  const canvasMaxX = windowDimension.xLen
  const canvasMaxY = windowDimension.yLen


  /*
  This currently breakes the movable item for some reason, but otherwise works
  <OutputPopup 
      text="Compile"
      content={
        <h1>test</h1>
  }/>

  */

  return (
    <>
      <RadioCollection count={3} tile_mode={tile_mode.RIGHT} />

      <MovableItem
        id={"move1"}
        minX={canvasMinX}
        minY={canvasMinY}
        maxX={canvasMaxX}
        maxY={canvasMaxY}
        content={
          <div
            className={"move1"}
            style={{
              backgroundColor: `${deez ? "Blue" : "Red"}`,
              borderRadius: "2em",
              padding: "2em",
              color: `${deez ? "White" : "Black"}`,
              transition: "all 1s ease-in-out",
              fontSize: `${deez ? "15px" : "15px"}`,
            }}
          >
            {(deez) ? "Width: " + windowDimension.xLen : "Height : " + windowDimension.yLen}
          </div>
        }
      />

      <MovableItem
        id={"move2"}
        minX={canvasMinX}
        minY={canvasMinY}
        maxX={canvasMaxX}
        maxY={canvasMaxY}
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
            Toggle Between Window Width and Height
            <ToggleButton
              func={() => {
                setDeez(!deez);
              }}
              state={deez}
              style={""}
            />
          </div>
        }
      />


    </>
  );
}


export default App;
