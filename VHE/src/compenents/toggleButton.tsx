export default function toggleButton(props:any) {

    return (
        <section>
          <button onClick={props.func}>{props.text}</button>
        </section>
      );
    }