import { useState } from "react";
import Form from "./components/Form";
import { FormContext } from "./FormContext/FormContext";

function App() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    contact:"",
    message:""
  })
  return (
    <FormContext.Provider value={{formData,setFormData}}>
        <div className="App w-full h-screen flex justify-center py-8 bg-slate-300">
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default App;

//if email does not contain @ or .com let the border be red and show a message on top
