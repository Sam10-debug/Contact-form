import React,{useContext,useState} from 'react'

import { FormContext } from '../FormContext/FormContext'

const Form = () => {
	const [invalid,setInvalid]=useState(false)
  const [invalidName,setInvalidName]=useState(false)
  const [invalidMessage,setInvalidMessage]=useState(false)
  const [invalidContact,setInvalidContact]=useState(false)
	const {formData,setFormData,setCompleted,completed}=useContext(FormContext)
	const handleData=(e)=>{
		const {name,value}=e.target
		setFormData(prev=>{
			return {
				...prev,
				[name]:value
			}
		})
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
    

		if (!formData.email.includes("@")){
			setInvalid(true)
		
		}else{
			setInvalid(false)
		}
		if (formData.name===""){
      setInvalidName(true)
		}
     if(formData.contact===""){
      setInvalidContact(true)
    }
     if(formData.message===""){
      setInvalidMessage(true)
    }
    
    if(formData.name.length>0&&formData.message.length>0&&formData.contact.length>0&&formData.email.length&&!invalid){
        setCompleted(true)
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
                  <label htmlFor="name">Full Name * {invalidName&&"please enter your name"}</label>
                  <input style={{
                    borderColor: invalidName?"red":"black"
                  }}  type="text" onChange={handleData} placeholder="Enter your full name" value={formData.name} name="name" />
                </div>
                <div className="">
                  <label htmlFor="email">Email * {invalid&&"Enter a valid email address"}</label>
                  <input className='my-4' style={{
					  borderColor: invalid?"red":"black"
				  }} type="email" onChange={handleData} id="email" name="email" value={formData.email} placeholder="Enter your email" />
                </div>
                <div className="">
                  <label htmlFor="contact">Contact Number * {invalidContact&&"please enter your contact"}</label>
                  <input className='mb-4' style={{
					  borderColor: invalidContact?"red":"black"
				  }} type="tel" id="contact" name="contact" value={formData.contact} placeholder="Enter your number" onChange={handleData} />
                </div>
              </div>
              <div className="textarea-section">
                <label htmlFor="message">Message * {invalidMessage&&"Leave a message"}</label>
                <textarea style={{
					  borderColor: invalidMessage?"red":"black"
				  }} name="message"  value={formData.message} id="message" cols="30" rows="10" onChange={handleData}></textarea>
              </div>
            </div>
            <div className="btn">
            <button className="" disabled={formData.name===""||formData.email===""||formData.message===""||formData.contact===""?true : false} onClick={handleSubmit}>SUBMIT</button>
            </div>
          </form>
      </section>
  )
}

export default Form

//finaly let the completed component display when the user has filled all he is supposed to fill appopriately 