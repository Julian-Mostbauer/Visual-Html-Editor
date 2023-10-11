export default function CostumButton(props:any) {

  return (
      <section>
        <button onClick={props.func}>{props.text}</button>
      </section>
    );
  }