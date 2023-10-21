/* --------------------------------------------Usage of MouseTracker ----------------------------------------------*/
/*                                                                                                                 */
/*                                                    Example                                                      */
/*                                                                                                                 */
/*                                          const mouse = getMouse();                                              */
/*                                          int mouseX = mouse.xPos;                                               */
/*                                                                                                                 */
/*                                                   Important                                                     */
/*                                                                                                                 */
/*                               Always Instance the getMouse() object to avoid Errors                             */
/*                                                                                                                 */
/* --------------------------------------------------------------------------------------------------------------- */

import { useEffect, useState } from "react";

export default function GetMouse() {

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [pressed, setPressed] = useState(false);
    const [target, setTarget] = useState(null);

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

    const mouseTargetHandler = (event: any) => {
        setTarget(event.target);
    }

    useEffect(()=>{
        window.addEventListener('mousemove', mouseUpdateHandler);
        window.addEventListener('mousedown', mousePressHandler);
        window.addEventListener('mouseup', mouseReleaseHandler);
        window.addEventListener('mouseover', mouseTargetHandler);
        return(()=>{
            window.removeEventListener('mousemove', mouseUpdateHandler);
            window.removeEventListener('mousedown', mousePressHandler);
            window.removeEventListener('mouseup', mouseReleaseHandler);
            window.removeEventListener('mouseover', mouseTargetHandler);
        })
    }, []) 

    return new MouseInfoSave(mouseX, mouseY, pressed, target)
}

export class MouseInfoSave {
    xPos;
    yPos;
    pressed;
    target;

    constructor(xPos: number, yPos: number, pressed: boolean, target: any) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.pressed = pressed;
        this.target = target;
    }
}

