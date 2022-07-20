import React, { useState } from "react";
import Card from "../UI/Card";
import Form from "../Form/form";
import Task from "../Task/Task";
// let data = []

const Main = (props) => {
  const [SavedFormData, setSavedFormData] = useState([]);
  const FormDataHandeler = (data) => {
    setSavedFormData((event) => {
      const updatedTasks = [data, ...event];
      // console.log("this is data ie coming from form handeler:" + data.data);
      // console.log("this is event ie coming from setstate:" + event);
      // console.log("this is updated task :" + updatedTasks);
      return updatedTasks;
    });
    // console.log("setState in formHandeler SavedFormData:");
    // console.log(SavedFormData);
  };
  // let Question = [
  //   <div>
  //     I Still dont get it!! State loging empty array on console but code is
  //     running just fine <br/>
  //     ooh i get it now my bad i was logging in form handeler func() outside it works fine 
  //   </div>,
  // ];
  console.log("setState SavedFormData:");
  console.log(SavedFormData);
  return (
    <Card className='props.className' >
      <Form data={FormDataHandeler}></Form>
      {SavedFormData.map((params) => (
        <Task key={params.data} data={params.data}></Task>
      ))}
      
    </Card>
  );
};

export default Main;
