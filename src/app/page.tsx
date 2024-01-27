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

export default function Page() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fatherName: "",
    motherName: "",
    address: "",
    pincode: "",
    country: "",
  });

  const inputFields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Email", name: "email" },
    { label: "Father Name", name: "fatherName" },
    { label: "Mother Name", name: "motherName" },
    { label: "Address", name: "address" },
    { label: "PIN code", name: "pincode", type: "number" },
  ];

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/registration", userInfo);
      if (res.status === 201) {
        toast.success("User Registered Successfully");
        router.push('/dashboard');
        setUserInfo({
          firstName: "",
          lastName: "",
          email: "",
          fatherName: "",
          motherName: "",
          address: "",
          pincode: "",
          country: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container-fluid containe-for-sub-box">
        <div className="row">
          <div className="col">
            <div className="parent-form-div">
              <div className="sub-form-data">
                <div className="form-top-heading mt-2">SignUp</div>
                <form className="mt-2" onSubmit={handleSubmit}>
                  {inputFields.map((field) => (
                    <div key={field.name} className="user-name-feild-div">
                      <label htmlFor="" className="user-name-label-feild mt-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        className="user-name-input"
                        value={userInfo[field.name]}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            [field.name]: e.target.value,
                          })
                        }
                      />
                    </div>
                  ))}
                  <br />
                  <Box sx={{ minWidth: 10, marginRight: '30px' }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Country</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="age"
                        value={userInfo.country}
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            country: e.target.value,
                          })
                        }
                      >
                        <MenuItem value={'India'}>India</MenuItem>
                        <MenuItem value={'Nepal'}>Nepal</MenuItem>
                        <MenuItem value={"Bangla Desh"}>Bangla desh</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <center>
                    <button
                      type="submit"
                      className="btn text-white mb-2"
                      style={{ backgroundColor: '#2c3e50' }}
                    >
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
