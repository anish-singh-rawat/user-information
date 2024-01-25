"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


export default function page() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>({
      firstName : "",
      lastName : "",
      email : "",
      fatherName : "",
      motherName : "",
      address : "",
      pincode : '',
      country : "",
  });

  const handleSubmit = async (e : any)=>{
    e.preventDefault();
    try {
      const res = await axios.post("/api/registration", userInfo)
      if(res.status === 201){
        toast.success("User Registered Successfully")
        router.push('/dashboard')
        setUserInfo({
            firstName : "",
            lastName : "",
            email : "",
            fatherName : "",
            motherName : "",
            address : "",
            pincode : '',
            country : "",
        })
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <ToastContainer/>
      <div className="container-fluid containe-for-sub-box ">
        <div className="row">
          <div className="col">
            <div className="parent-form-div">
              <div className="sub-form-data">
                <div className="form-top-heading mt-2">SinUp</div>
                <form className='mt-2' onSubmit={handleSubmit} >
                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild mt-2'> First Name </label>
                    <input type="text" name='username'
                      className='user-name-input'
                      value={userInfo.firstName}
                      onChange={(e) => setUserInfo({ ...userInfo, firstName : e.target.value })}  />
                  </div>

                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild mt-2'> Last Name </label>
                    <input type="text" name='username'
                      className='user-name-input ' 
                      value={userInfo.lastName}
                      onChange={(e) => setUserInfo({ ...userInfo, lastName : e.target.value })}  />
                  </div>

                  <div className="user-password-feild">
                    <label htmlFor="" className='mt-2 user-password-label-feild'>Email </label>
                    <input type="text" name='email'
                      className='user-password-input'
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({ ...userInfo, email : e.target.value })} />
                  </div>

                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild mt-2'> Father Name </label>
                    <input type="text" name='username'
                      className='user-name-input '
                      value={userInfo.fatherName}
                      onChange={(e) => setUserInfo({ ...userInfo, fatherName : e.target.value })}  />
                  </div>

                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild mt-2'> Motehr Name </label>
                    <input type="text" name='username'
                      className='user-name-input '
                      value={userInfo.motherName}
                      onChange={(e) => setUserInfo({ ...userInfo, motherName : e.target.value })}  />
                  </div>

                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild mt-2'>Address</label>
                    <input type="text" name='username'
                      className='user-name-input '
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({ ...userInfo, address : e.target.value })}  />
                  </div>

                  <div className="user-name-feild-div">
                    <label htmlFor="" className='user-name-label-feild mt-2'>PIN code </label>
                    <input type="number" name='username'
                      className='user-name-input ' 
                      value={userInfo.pincode}
                      onChange={(e) => setUserInfo({ ...userInfo, pincode : e.target.value })}   />
                  </div>
                  <br />
                   <Box sx={{ minWidth: 10, marginRight : '30px' }}>
                     <FormControl fullWidth>
                       <InputLabel id="demo-simple-select-label">Country</InputLabel>
                       <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         label="age"
                         value={userInfo.country}
                         onChange={(e) => setUserInfo({ ...userInfo, country : e.target.value })}>
                         <MenuItem value={'India'}>India</MenuItem>
                         <MenuItem value={'Nepal'}>Nepal</MenuItem>
                         <MenuItem value={"Bangla Desh"}> Bangla desh </MenuItem>
                       </Select>
                     </FormControl>
                  </Box> 
                  <br />
                  <center>
                    <button type='submit'
                      className="btn text-white mb-2"
                      style={{ backgroundColor: '#2c3e50' }}>
                      Submit
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
