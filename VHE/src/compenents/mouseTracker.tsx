import { useEffect, useState } from "react";

export default function getMouse() {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [pressed, setPressed] = useState(false);

    const mouseUpdateHandler = (event: any) => {
        setMouseX(event.clientX)
        setMouseY(event.clientY)
    }

    const mousePressHandler = () => {
        setPressed(true);
    }

    const mouseReleaseHandler = () => {
        setPressed(false);
    }

    useEffect(()=>{
        window.addEventListener('mousemove', mouseUpdateHandler);
        window.addEventListener('mousedown', mousePressHandler);
        window.addEventListener('mouseup', mouseReleaseHandler);
        return(()=>{
            window.removeEventListener('mousemove', mouseUpdateHandler);
            window.removeEventListener('mousedown', mousePressHandler);
            window.removeEventListener('mouseup', mouseReleaseHandler);
        })
    }, []) 

    return new MouseInfoSave(mouseX, mouseY, pressed)
}

export class MouseInfoSave {
    xPos;
    yPos;
    pressed;

    constructor(xPos: number, yPos: number, pressed: boolean) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.pressed = pressed;
    }
}

