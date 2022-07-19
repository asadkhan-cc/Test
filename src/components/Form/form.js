import React, { useState } from "react";
import './Form.css'
function Form(props) {
  const [InputText, setInputText] = useState("");

  const onsubmitHandeler = (Submitevent) => {
    Submitevent.preventDefault();
    //   console.log( event.target[0].value);

    const Submitdata = { data: Submitevent.target[0].value }; //bindind input data as an object
    // console.log(Submitdata);
    if (Submitdata.data === "") {
      window.alert("Kindly add a task");
    } else {
      props.data(Submitdata);
      setInputText(""); // to reset input valve
    }
  };

  const oninputHandeler = (inpEvent) => {
    setInputText(inpEvent.target.value);
  };
  return (
    <div>
      <form className="new-form" onSubmit={onsubmitHandeler}>
        <label>TODOS LIST</label>
        <input
          type="text"
          placeholder="Enter Task Here"
          onChange={oninputHandeler}
          value={InputText}
        ></input>
        <button type="Submit">Add TODO Task</button>
      </form>
    </div>
  );
}

export default Form;
