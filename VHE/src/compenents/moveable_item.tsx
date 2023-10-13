import getMouse from './mouseTracker.tsx'

interface Prop {
    text:string;
    color:string
}

export default function MoveableItem(props:Prop) {
    return (
        <div className="movable_item" 
        style={{ 
            color: `${props.color}`,
            position: "absolute", 
            left: `${getMouse().pressed ? getMouse().xPos : getMouse().lastPressed}px`, 
            top:  `${getMouse().pressed ? getMouse().yPos : getMouse().lastPressed}px` 
            }}>  
                <p>{props.text}</p>
        </div>
      );
    }