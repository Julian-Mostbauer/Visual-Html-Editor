import { tile_mode } from "./enums";
import ToggleButton from "./toggleButton";
import { useState } from "react";

interface Prop {
  count: number;
  tile_mode: tile_mode;
}

function setStateAtIndex(
  currentStates: boolean[],
  index: number,
  set_fn: (a: boolean[]) => void
) {
  const newStates = [...currentStates]; // create a new copy of the array
  newStates[index] = !newStates[index]; // update the new copy
  set_fn(newStates); // set the new state
}

export default function RadioCollection(props: Prop) {
  const monkeys = []; //funny
  const initBools = [];
  for (let i = 0; i < props.count; i++) {
    monkeys.push(i);
    initBools.push(false);
  }
  const [currentStates, setStates] = useState(initBools);

  switch (props.tile_mode) {
    case tile_mode.RIGHT:
      return (
        <table>
          {monkeys.map((index) => (
            <td>
              <ToggleButton
                func={() => setStateAtIndex(currentStates, index, setStates)}
                state={currentStates[index]}
                style="card"
              />
            </td>
          ))}
        </table>
      );

    case tile_mode.DOWN:
      return (
        <table>
          {monkeys.map((index) => (
            <ul>
              <ToggleButton
                func={() => setStateAtIndex(currentStates, index, setStates)}
                state={currentStates[index]}
                style="card"
              />
            </ul>
          ))}
        </table>
      );

    default:
      return (
        <>
          <h1>You fucked up</h1>
        </>
      );
  }
}
/* -------------------------------------------Usage of RadioCollection --------------------------------------------*/
/*                                                                                                                 */
/*                                                   Required                                                      */
/*                                                                                                                 */
/*                              <RadioCollection count={COUNT} tile_mode='LEFT/RIGHT' />                           */
/*                                                                                                                 */
/*                                                    Example                                                      */
/*                                                                                                                 */
/*                                   <RadioCollection count={5} tile_mode='right' />                               */
/*                                   <RadioCollection count={5} tile_mode='down' />                                */
/*                                                                                                                 */
/*                                                   Important                                                     */
/*                                                                                                                 */
/*                                    always use the count and the tile_mode prop                                  */
/*                                  tile_mode has "right" or "down" and nothing else                               */
/*                                                                                                                 */
/* --------------------------------------------------------------------------------------------------------------- */
