export default function CostumButton(props: any) {
  return (
    <section>
      <button className="btn btn-info" onClick = {props.func}>{props.text}</button>
    </section>
  );
}