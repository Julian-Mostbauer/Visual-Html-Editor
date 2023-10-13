import { useEffect, useState } from "react";

let lastPressed = false;

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
        lastPressed = pressed;
    }

    const mouseReleaseHandler = () => {
        setPressed(false);
        lastPressed = pressed;
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

    return new MouseInfoSave(mouseX, mouseY, pressed, lastPressed)
}

export class MouseInfoSave {
    xPos;
    yPos;
    pressed;
    lastPressed;

    constructor(xPos: number, yPos: number, pressed: boolean, lastPressed: boolean) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.pressed = pressed;
        this.lastPressed = lastPressed;
    }
}