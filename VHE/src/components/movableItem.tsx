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

import getMouse from "./mouseTracker";

const ids: string[] = [];
const lastPoses: PositionLink[] = [];
let dragging: string = "";
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
    console.log("ERROR : INVALID ID - FROM FUNCTION getFromLinks()")
    return new PositionLink(-100, -100, "")
}

export default function MovableItem(props: Prop) {
    const mouse = getMouse();

    if (!ids.includes(props.id)) {
        ids.push(props.id);
        lastPoses.push(new PositionLink(10, 10, props.id))
    }

    if (!mouse.pressed && dragging == props.id) {
        dragging = "";
    }

    if (mouse.target != null && mouse.target.className == props.id && mouse.pressed && dragging == "") {
        dragging = props.id;
    }

    if (dragging == props.id) {
        getFromLinks(props.id).x = mouse.xPos;
        getFromLinks(props.id).y = mouse.yPos;
    }

    return (
        <section>
            {(dragging == props.id) ? 
            <div className={props.id} style={{ position: "absolute", left: `${mouse.xPos}px`, top: `${mouse.yPos}px`, userSelect: "none", padding: "1rem", margin: "-5rem", transition: "all", cursor: "grabbing"}}>
                {props.content}
            </div>
            :
            <div className={props.id} style={{ position: "absolute", left: `${getFromLinks(props.id).x}px`, top: `${getFromLinks(props.id).y}px`, padding: "1rem", userSelect: "none", margin: "-5rem", transition: "all", cursor: "grab"}}>
                {props.content}
            </div>
            }
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
}