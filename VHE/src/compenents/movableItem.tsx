import getMouse from "./mouseTracker";

const ids: string[] = [];
const lastPoses: PositionLink[] = [];
let dragging: string;

function getFromLinks(id: string) {
    for (let i = 0; i < lastPoses.length; i++) {
        if (lastPoses[i].id == id) {
            return lastPoses[i];
        }
    }
}

export default function MovableItem(props: any) {
    const mouse = getMouse();

    if (!ids.includes(props.id)) {
        ids.push(props.id);
        lastPoses.push(new PositionLink(10, 10, props.id))
    }

    if (!mouse.pressed && dragging == props.id) {
        dragging = "";
    }

    if (mouse.target != null && mouse.target.className == props.id && mouse.pressed) {
        dragging = props.id;
    }

    if (dragging == props.id) {
        getFromLinks(props.id).x = mouse.xPos;
        getFromLinks(props.id).y = mouse.yPos;
    }

    if (dragging == props.id) {
        return (
            <section>
                <div className={props.id} style={{ position: "absolute", left: `${mouse.xPos}px`, top: `${mouse.yPos}px`, userSelect: "none" }}>
                    {props.content}
                </div>
            </section>
        );
    } else {
        return (
            <section>
                <div className={props.id} style={{ position: "absolute", left: `${getFromLinks(props.id).x}px`, top: `${getFromLinks(props.id).y}px`, padding: "1rem", userSelect: "none" }}>
                    {props.content}
                </div>
            </section>
        );
    }    
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