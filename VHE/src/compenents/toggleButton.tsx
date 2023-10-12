export default function ToggleButton(props:any) {

  return (
      <section>
        <button className={(props.state) ? "btn btn-success" : "btn btn-danger"} onClick={props.func}>{(props.state) ? "on" : "off"}</button>
      </section>
    );
  }