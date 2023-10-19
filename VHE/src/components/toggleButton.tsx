/* ----------------------------------------------Usage of ToggleButton --------------------------------------------*/
/*                                                                                                                 */
/*                                                   Required                                                      */
/*                                                                                                                 */
/*                     <ToggleButton func={()=>FUNCTION_ONCLICK} style={STYLE} state={BOOL_STATE} />               */
/*                                                                                                                 */
/*                                                    Example                                                      */
/*                                                                                                                 */
/*                 <ToggleButton func={()=>toggleButton1()} style={buttonStyle} state={button1Toggled} />          */
/*                <ToggleButton func={()=>toggleButton2()} style={buttonStyle2} state={button2Toggled} />          */
/*                                                                                                                 */
/*                                                   Important                                                     */
/*                                                                                                                 */
/*                                   always use all props (STYLE, STATE, ONCLICK)                                  */
/*                                   functions like a normal button, but is styled                                 */
/*                                                                                                                 */
/* --------------------------------------------------------------------------------------------------------------- */

interface Prop {
  func: Function;
  style: string;
  state: boolean;
}

export default function ToggleButton(props:Prop) {

  return (
      <section className={props.style}>
        <button className={(props.state) ? "btn btn-success" : "btn btn-danger"} onClick={props.func}>{(props.state) ? "on" : "off"}</button>
      </section>
    );
  }