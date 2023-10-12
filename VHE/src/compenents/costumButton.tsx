export default function CostumButton(props:any) {

  return (
      <section>
        <button className="btn btn-success" onClick={props.func}>{props.text}</button>
      </section>
    );
  }