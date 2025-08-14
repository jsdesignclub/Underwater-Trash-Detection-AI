import React, { useEffect, useState } from 'react';
import axios from 'axios';



export const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  useEffect(() => {
    fetchVehicles();
    // Get the username and role from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedRole = localStorage.getItem('role');
    if (storedUsername) setUsername(storedUsername);
    if (storedRole) setRole(storedRole);
  }, []);

  const fetchVehicles = async () => {
      try {
          const response = await axios.get('http://sunflowerfinalproject-production.up.railway.app/api/users');
          setVehicles(response.data);
      } catch (error) {
          console.error('Error fetching vehicles:', error);
      }
  };
  
  return (
      <div className="max-w-3xl mx-auto mt-10">
         
         <div className='flex bg-slate-500 w-[100%] align-center justify-center font-medium'>
            <div className='w-[40%] p-1'>
                <span className='material-symbols-outlined'></span>
               <h3 className="text-xl font-bold mb-4">Welcome, {username}!</h3>
            </div>
            <div className='flex-1 p-1 '>
               <h3 className="text-xl font-bold mb-4">Role:{role}</h3>
            </div>   
           
         </div>

          
      </div>
  );
};