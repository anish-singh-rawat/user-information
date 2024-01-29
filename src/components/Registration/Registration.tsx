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
import { CircularProgress } from '@mui/material';
import * as Yup from 'yup';

const Registration = () => {
  const [validationErrors, setValidationErrors] = useState<any>({});

  const router = useRouter();
  const [userInfo, setUserInfo] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    fatherName: "",
    motherName: "",
    address: "",
    pincode: "",
    country: "",
    loader: false,
    disable: false,
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signupSchema.validate(userInfo, { abortEarly: false });

      setUserInfo({
        ...userInfo,
        loader: true,
        disable: true,
      });

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
          loader: false,
          disable: true,
        });
        setValidationErrors({});
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors: any = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setValidationErrors(errors);
      } else {
        console.log(error);
      }

      setUserInfo({
        ...userInfo,
        loader: false,
        disable: false,
      });
    }

  };

  const signupSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("firstName cannot be empty!"),

    lastName: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("lastName cannot be empty!"),


    email: Yup.string()
    .email("Invalid email format")
    .required("email cannot be empty!"),

    fatherName: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("fatherName cannot be empty!"),

    motherName: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("motherName cannot be empty!"),

    address: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("address cannot be empty!"),

    pincode: Yup.string()
    .required("pincode cannot be empty!"),

    country: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("country cannot be empty!"),
  });

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
                  <div className="row">
                    {inputFields.map((field) => (
                      <div key={field.name} className="col-md-6">
                        <div className="user-name-feild-div">
                          <label htmlFor="" className="user-name-label-feild mt-3">
                            {field.label}
                          </label>
                          <input
                            type={field.type || "text"}
                            name={field.name}
                            className={`user-name-input mt-2 ${validationErrors[field.name] ? 'input-error' : ''}`}
                            value={userInfo[field.name]}
                            onChange={(e) =>
                              setUserInfo({
                                ...userInfo,
                                [field.name]: e.target.value,
                              })
                            }
                          />
                          {validationErrors[field.name] && (
                            <p className="validation-error">{validationErrors[field.name]}</p>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="col-md-6 mt-4">
                      <Box sx={{ minWidth: 10, marginRight: '30px' }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Country</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="age"
                            required
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
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <center>
                        {userInfo.loader ? (
                          <CircularProgress />
                        ) : (
                          <button
                            disabled={userInfo.disable}
                            type="submit"
                            className="btn text-white mb-2"
                            style={{ backgroundColor: '#2c3e50' }}
                          >
                            Submit
                          </button>
                        )}
                      </center>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;