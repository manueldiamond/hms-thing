import React from "react";
import "./button.css";

function Button2(props) { 
  let className = props.className
  let buttonText = props.buttonText
  let onClick = props.onClick
  return <button onClick={onClick} className={className||`button-primary`} type="submit" >{buttonText||"Register Patient"}</button>;
}
export default Button2;
