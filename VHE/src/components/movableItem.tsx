import GetMouse, { MouseInfoSave } from "./mouseTracker";
import { useState, useEffect, useRef } from "react";

const ids: string[] = [];
const lastPoses: PositionLink[] = [];
let IdOfDraggedProp: string = "";
interface Prop {
  id: string;
  content: JSX.Element;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

function getFromLinks(id: string): [PositionLink?, Error?] {
  for (let i = 0; i < lastPoses.length; i++) {
    if (lastPoses[i].id == id) {
      return [lastPoses[i], undefined];
    }
  }

  return [
    undefined,
    new Error("ERROR : INVALID ID - FROM FUNCTION getFromLinks()"),
  ];
}

export default function MovableItem(props: Prop) {
  const mouse = GetMouse();
  const isDraggedProp: boolean = IdOfDraggedProp == props.id;

  const noIdDragged: boolean = IdOfDraggedProp == "";

  if (!ids.includes(props.id)) {
    ids.push(props.id);
    lastPoses.push(new PositionLink(0, 0, props.id)); // Initialisation
  }

  if (mouse.target != null) {
    if (!mouse.pressed && isDraggedProp) {
      IdOfDraggedProp = "";
    }

    if (mouse.target.className == props.id && mouse.pressed && noIdDragged) {
      IdOfDraggedProp = props.id;
    }

    if (isDraggedProp) {
      const [res, err] = getFromLinks(props.id);
      if (err == undefined) res!.setToCurrentMouse(mouse);
    }
  }

  ///////////////////////////////////////////

  const refContainer = useRef<HTMLElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);

  ///////////////////////////////////////////

  const [res, err] = getFromLinks(props.id);
  if (err != undefined) throw(err)
  
  const x_moving = valueOrBounds(
    mouse.xPos,
    props.minX,
    props.maxX - dimensions.width / 1.14
  );
  const y_moving = valueOrBounds(
    mouse.yPos,
    props.minY,
    props.maxY - dimensions.height * 1.5
  );
  const x_stationary = valueOrBounds(
    res!.x,
    props.minX,
    props.maxX - dimensions.width / 1.14
  );
  const y_stationary = valueOrBounds(
    res!.y,
    props.minY,
    props.maxY - dimensions.height * 1.5
  );

  return (
    <section>
      <div
        ref={refContainer}
        className={props.id}
        style={{
          position: "absolute",
          left: `${isDraggedProp ? x_moving : x_stationary}px`,
          top: `${isDraggedProp ? y_moving : y_stationary}px`,
          userSelect: "none",
          padding: "1rem",
          margin: "-5rem",
          transition: "all",
          cursor: `${isDraggedProp ? "grabbing" : "grab"}`,
        }}
      >
        {props.content} {dimensions.width} {dimensions.height}
      </div>
    </section>
  );
}

function valueOrBounds(value: number, min: number, max: number) {
  // Returns the value if it is between the min and max. If it is outside the min and max it gives you the corresponding boundry
  return value < min ? min : value > max ? max : value;
}

class PositionLink {
  x;
  y;
  id;

  constructor(x: number, y: number, id: string) {
    this.x = x;
    this.y = y;
    this.id = id;
  }

  setToCurrentMouse(mouse: MouseInfoSave) {
    //Updates the x and y to the current mouse position
    this.x = mouse.xPos;
    this.y = mouse.yPos;
  }
}

/* ----------------------------------------------Usage of MovableItem ---------------------------------------------*/
/*                                                                                                                 */
/*                                                   Required                                                      */
/*                                                                                                                 */
/*                        <MovableItem id={"NAME"} content={<div className={"NAME"}></div>}>                       */
/*                                                                                                                 */
/*                                                   Examples                                                      */
/*                                                                                                                 */
/*  <MovableItem id={"widget1"} content={<div className={"widget1"} style={{margin: 5px}}>Hello, Im a Div</div>}>  */
/*         <MovableItem id={"p2"} content={<p className={"p2"} style={{margin: 5px}}>Hello, Im a P</p>}>           */
/*                                                                                                                 */
/*                                                   Important                                                     */
/*                                                                                                                 */
/*                        Always set a className identical to the id in the content object                         */
/*                     Do not set Identical Ids and Always use both the id and the Content prop                    */
/*                                                                                                                 */
/* --------------------------------------------------------------------------------------------------------------- */
