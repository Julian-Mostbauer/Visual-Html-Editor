import Popup from "reactjs-popup";

interface Props {
  content: JSX.Element;
  text: string
}

export default function OutputPopup(prop: Props) {
  return (
    <Popup
      trigger={<button className="popupButton"> {prop.text} </button>}
      position="bottom center"
      className="renderButton"
    >
      <div className="popup">
      {prop.content}
      </div>
    </Popup>
  );
}
