import {useEffect, useState} from 'react'
import {checkIN} from '../../service/attendanceService'

export default function checkIN(){
    const [employeeID,setemployeeID]=useState('');
    const [status,setstatus]=useState('');
    const [message,setmessage]=useState('');
    const handlecheckIN=async(e)=>{
        e.preventDefault();
        try{
            const response=await checkIN(employeeID,status );
                setmessage(response.msg);
           
        }catch(error){
            setmessage(error.message.data.msg,"failed to check in "); ;
        }
    }
    useEffect(()=>{
        const getemployeeIDsession=async()=>{
            try{
                const response=await axios.get('http://localhost:4000/api/session');
                setemployeeID(response.data.employeeID);
            }
            catch(error){
                console.log("failed to get session data",error);
                setmessage("failed to get session data");

            }
        }
        getemployeeIDsession();
    },[]);
    return <>
     <div>
            <h2>Employee Check-In</h2>
            {/* Show the employeeID that was fetched from the session */}
            <p>Employee ID: {employeeID}</p>

            <form onSubmit={handlecheckIN}>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        placeholder="Enter status"
                        value={status}
                        onChange={(e)=>setstatus(e.target.value)}
                        required
                    />
                  
                </div>

                <button type="submit">Check In</button>
            </form>

            <p>{message}</p>
        </div>
    </>
}