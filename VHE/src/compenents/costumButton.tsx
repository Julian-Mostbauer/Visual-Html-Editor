export default function CostumButton(props:any) {

  return (
      <section>
        <button className="" onClick={props.func}>{props.text}</button>
      </section>
    );
  }