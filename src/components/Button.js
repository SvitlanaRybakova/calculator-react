import { useContext } from "react";
import { button } from "../css/Button.module.css";
import { DataContext } from "../contexts/DataContext";

function Button(props) {
  const { handleClick } = useContext(DataContext);

  return (
    <div className={button} onClick={() => handleClick(props.data)}>
      <span>{props.data}</span>
    </div>
  );
}

export default Button;
