import "./styles.css";

function Switch(props) {
  return (
    <label className="toggle-switch">
      <input type="checkbox" onClick={props.handleClick} />
      <span className="switch" />
    </label>
  );
}

export default Switch;
