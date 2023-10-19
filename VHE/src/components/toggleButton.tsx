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