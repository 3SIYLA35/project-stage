import axios from 'axios';

export const checkin=async(status)=>{
    const response=await axios.post('http://localhost:4000/attendance/employee-check-in',{status})
    return response.data;
};
export const checkOut=async(status)=>{
    const response=await axios.post('http://localhost:4000/attendance/employee-check-out',{status})
    return response.data;
};
export const getattendance=async(employeeID,status)=>{
    const response=await axios.post(`http://localhost:4000/attendance/getattendance/${employeeID}`,{employeeID,status})
    return response.data;
};