import GetMouse, { MouseInfoSave } from "./mouseTracker";

const ids: string[] = [];
const lastPoses: PositionLink[] = [];
let IdOfDraggedProp: string = "";
interface Prop {
  id: string;
  content: JSX.Element;
}

function getFromLinks(id: string) {
  for (let i = 0; i < lastPoses.length; i++) {
    if (lastPoses[i].id == id) {
      return lastPoses[i];
    }
  }
  console.log("ERROR : INVALID ID - FROM FUNCTION getFromLinks()");
  return new PositionLink(-100, -100, "");
}

export default function MovableItem(props: Prop) {
  const mouse = GetMouse();
  const isDraggedProp: boolean = IdOfDraggedProp == props.id;

  const noIdDragged: boolean = IdOfDraggedProp == ""

  if (!ids.includes(props.id)) {
    ids.push(props.id);
    lastPoses.push(new PositionLink(0, 0, props.id)); // Initialisation
  }

  if (mouse.target != null) {

    if (!mouse.pressed && isDraggedProp) {
      IdOfDraggedProp = "";
    }

    if (
      mouse.target.className == props.id &&
      mouse.pressed &&
      noIdDragged
    ) {
      IdOfDraggedProp = props.id;
    }
    
    if (isDraggedProp) {
      getFromLinks(props.id).setToCurrentMouse(mouse);
    }

}

  return (
    <section>
      {isDraggedProp ? (
        // If the prop is being dragged, the mouse position is used directly
        <div
          className={props.id}
          style={{
            position: "absolute",
            left: `${mouse.xPos}px`,
            top: `${mouse.yPos}px`,
            userSelect: "none",
            padding: "1rem",
            margin: "-5rem",
            transition: "all",
            cursor: "grabbing",
          }}
        >
          {props.content}
        </div>
      ) : (
        // Else the position is taken from the lastPoses array
        <div
          className={props.id}
          style={{
            position: "absolute",
            left: `${getFromLinks(props.id).x}px`,
            top: `${getFromLinks(props.id).y}px`,
            padding: "1rem",
            userSelect: "none",
            margin: "-5rem",
            transition: "all",
            cursor: "grab",
          }}
        >
          {props.content}
        </div>
      )}
    </section>
  );
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
