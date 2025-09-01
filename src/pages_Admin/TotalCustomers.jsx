import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerModel from './models/CustomerModel';

function TotalCustomers() {
  const [totalUser, setTotalUser] = useState([]);
  const token = localStorage.getItem('token');
    const [customermodel, setCustomermodel] = useState(false)
    const [customerdata, setCustomerdata] = useState([])
  



  const fetchDetails = async () => {
    try {
      const res = await axios.get('https://malboosat-1.onrender.com/admin/allusers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
 
      if(res.data.success) {
      setTotalUser(res.data.Total_Users)
    }

    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  
  const changed=async(e,_id)=>{
    console.log(_id)
    const data={
      role:e.target.value,
      userID:_id
    }
  
    try {
      const response = await axios.post(`https://malboosat-1.onrender.com/admin/changerole`,data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response.data.message);
      if (response?.data?.sucess){
              toast.success(response?.data?.message,
                  { position: 'top-right',
                   autoClose: 1000,
                   // hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   }
                 )

          }
          else{
              toast.warn(response?.data?.message,
                  { position: 'top-right',
                   autoClose: 1000,
                   // hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   }
                 )
      
          }
    
    } catch (e) {
      console.error(e);
    }finally{
      fetchDetails()

    }
  }

  const handle_customer=async(_id)=>{
    const id=_id

      try {
        const response = await axios.get(`https://malboosat-1.onrender.com/admin/getcustomer/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("sheeraz",response.data)
      if (response.data.success) {
        setCustomerdata(response.data.user)
    setCustomermodel(true)
      }

     
    } catch (e) {
      console.error(e);
    }
  }

useEffect(() => {
  fetchDetails()
  

    // fetchOrders();
  }, [token]);
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard - Customer</h1>
        <p className="text-gray-600">Manage and view all the registered customer.</p>
      </header>

      {/* Users Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {totalUser.map((user) => (
          // (user.role==='user'&&
          <div key={user._id} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
            {/* User Info */}
            <div className="mb-4">
              <div className='flex justify-between'>
              <h2 className="text-xl font-semibold text-gray-800">{user.username}</h2>
              <div className='flex items-center gap-1'>
                <p className="font-bold text-gray-800">role:</p>


                <select value={user.role} onChange={(e)=>changed(e,user._id)}>
                <option value='admin' >Admin</option>
                <option value='user'>User</option>
                <option value='user'>User</option>



                </select>
               
              </div>

              </div>
              
              <p className="text-gray-600">{user.email}</p>
            </div>
            {/* Stats */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Products:</p>
                <p className="font-bold text-gray-800">{user?.products?.length}</p>
              </div>
              <div>
                <p className="text-gray-500">Order:</p>
                <p className="font-bold text-gray-800">{user?.sellersorders?.length}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Rating:</p>
                <p className="font-bold text-yellow-500">{user?.rating} ⭐</p>
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <button onClick={()=>handle_customer(user._id)} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
                View Customer
              </button>
              <button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md">
              Remove {user.role}
              </button>
            </div>
          </div>
        ))}
      </div>
      {
        customermodel&& <CustomerModel customer={customerdata}  setCustomermodel={()=>setCustomermodel(!customermodel)}/>
      }
    </div>
  );
}

export default TotalCustomers