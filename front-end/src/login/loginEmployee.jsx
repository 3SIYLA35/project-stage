import { useRef,useState } from "react"
import axios from "axios"

import Style from './cssform.module.css'
export default function Login(){

    const [emailEmployee,setemailEmployee]=useState('')
    const [passwordEmployee,setpasswordEmployee]=useState('')
    const [HRchecked,setcheckedhr]=useState('')
    const [employeechecked,setcheckedemployee]=useState('')
    const [message,setmessage]=useState('');
    const [isLoggedIn,setislogein]=useState(false);

    const handledata=(e)=>{
        const { name,value}=e.target;
    if(name==='email') {
    setemailEmployee(value);
    }else if(name==='password') {
    setpasswordEmployee(value);
    }else if(name==='HR') {
        setcheckedhr(value);
    }else if(name==='Employee') {
        setcheckedemployee(value);
    }
    
    console.log(e.target.value )
    }
    const handlesubmit=async(e,usertype)=>{
        e.preventDefault();

        
        try {
            if(usertype==='Employee') {
            const response = await axios.post('http://localhost:4000/api/login',{
                email:emailEmployee,password:passwordEmployee
               
            } )
            console.log('success')
            setislogein(true)
        setmessage('Registration Complete');
            }
            else if(usertype==='HR'){
                const response = await axios.post('http://localhost:4000/hr/login',{
                    email:emailEmployee,password:passwordEmployee
                } );
                setmessage('Invalid Credentials. Please try again');
                setislogein(true)
            }
            alert(`Logged in successfully ${usertype}`)
    
        } catch (error) {
            console.error('Error logging in:', error.response.data);
        }
    }


    return <>
    {/* <form  onSubmit={handlesubmit}>
            <input type="email" name="email" placeholder="Email" onChange={handledata}  required />
            <input type="password" name="password" placeholder="Password" onChange={handledata} required />
            <br />
            <label className="form-check-label" htmlFor="HR">HR</label>
            <input id="HR" type="checkbox" name="HR" onChange={handledata}  />
            <label className="form-check-label" htmlFor="Employee">Employee</label>
            <input type="checkbox" id="Employee" name="Employee" onChange={handledata}  />
            <br/>
            <button onClick={(e)=>handlesubmit(e,'Employee')} type="submit">Login as Employee</button>
            <button onClick={(e)=>handlesubmit(e,'HR')} type="submit">Login as HR</button>
        </form> */}

    {/* <link rel="preconnect" href="https://fonts.gstatic.com"></link> */}
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link> */}
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet"></link>
      
   
    {!isLoggedIn ?(
    <form onSubmit={handlesubmit}>
        <h3>Login Here</h3>
        <div className="input-form">
        <label for="Email">Email</label>
        <input className="" type="email" name="email" placeholder="Email" onChange={handledata}  required/>
        
        </div> 
        <div  className="input-form">
        <label for="password">Password</label>
        <input className="" type="password" name="password" placeholder="Password" onChange={handledata} required />
        
        </div> 
        <div className="btn-log">
        <button style={{ marginLeft:"10px", }} onClick={(e)=>handlesubmit(e,'Employee')} type="submit"> Employee</button>
        <button style={{ marginLeft:"45px", }} onClick={(e)=>handlesubmit(e,'HR')} type="submit"> HR</button>
        </div>
    </form>
    ) : ( 
        <div style={{height: "320px",
            width: "400px",
            backgroundColor:"rgb(173, 216, 230)",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: '50%',
            left: "50%",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 40px rgba(8,7,16,0.6)",
            padding: "70px 35px",color:"black",textAlign:"center",fontSize: "25px"}} className="message-boxx">{message}</div>
 )}
  </>
}