import React,{useContext,useState} from 'react'

import { FormContext } from '../FormContext/FormContext'

const Form = () => {
	const [invalid,setInvalid]=useState(false)
	const {formData,setFormData}=useContext(FormContext)
	const handleData=(e)=>{
		const {name,value}=e.target
		setFormData(prev=>{
			return {
				...prev,
				[name]:value
			}
		})
		// console.log(formData)
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		// console.log("submitted")
		if (!formData.email.includes("@")){
			setInvalid(true)
			// console.log(true)
		}else{
			// console.log(false)
			setInvalid(false)
		}
		if (formData.name===""||formData.email===""||formData.contact===""||formData.message===""){
			console.log("nah")
		}
	}

  return (
	<section className="form-data  md:w-3/5 md:border-[1px] md:border-white">
        <div className="bg-slate-300 py-4 pl-8">
          <h1 className="text-2xl text-black font-bold">Contact Us</h1>
          <p className="text-slate-400">Please fill this form in a decent manner</p>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <div className="input-section">
                <div className="">
                  <label htmlFor="name">Full Name *</label>
                  <input  type="text" onChange={handleData} placeholder="Enter your full name" value={formData.name} name="name" />
                </div>
                <div className="">
                  <label htmlFor="email">Email *</label>
                  <input style={{
					  borderColor: invalid?"red":"black"
				  }} type="email" onChange={handleData} id="email" name="email" value={formData.email} placeholder="Enter your email" />
                </div>
                <div className="">
                  <label htmlFor="contact">Contact Number *</label>
                  <input type="tel" id="contact" name="contact" value={formData.contact} placeholder="Enter your number" onChange={handleData} />
                </div>
              </div>
              <div className="textarea-section">
                <label htmlFor="message">Message *</label>
                <textarea name="message"  value={formData.message} id="message" cols="30" rows="10" onChange={handleData}></textarea>
              </div>
            </div>
            <div className="btn">
            <button className="" onClick={handleSubmit}>SUBMIT</button>
            </div>
          </form>
      </section>
  )
}

export default Form

//add a functionality whereby if the use doesnt fill in the inputs and press submit 
//he is notified of the respective input he is yet to fill 
// and maybe you could add a small message there indicating what to do
//finaly let the completed component display when the user has filled al he is supposed to fill appopriately 