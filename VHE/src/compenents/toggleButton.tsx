export default function ToggleButton(props: any) {
  return (
    <section>
      <button className="btn btn-success" onClick = {props.func}>{props.text}</button>
    </section>
  );
}