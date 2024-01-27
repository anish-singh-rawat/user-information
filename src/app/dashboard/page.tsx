'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import UsersData from '@/components/UsersData'

const Dashboard = () => {
  const [userData, setUserData] = useState<any>([])
  useEffect(() => {
    const test = getServerSideProps();
    test.then((res) => {
      setUserData(res.props.userData)
    })
  }, [])

  return (
    // <>
    //   {
    //     userData.length > 0 ?
    //       <div>
    //         <center>
    //           <h1>
    //             Here are all users
    //           </h1>
    //         </center>
    //         {
    //           userData.map((data: any, i: any) => (
    //             <div key={data._id} className="container">
    //               <div className="row">
    //                 <div className="col">
    //                   <div className="card mt-3 mb-3 shadow"
    //                     style={{ border: "2px solid #17a2b8" }}>
    //                     <div className="card-body bg-light">
    //                       <center>
    //                         User {i + 1}
    //                       </center>
    //                       <div className=' mt-4 d-flex justify-content-between align-items-center'>
    //                         <h5 className="card-title text-primary">
    //                           Email : {data.email}
    //                         </h5>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           First Name : {data.firstName}
    //                         </p>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           last Name : {data.lastName}
    //                         </p>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           father name  : {data.fatherName}
    //                         </p>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           mother name  : {data.motherName}
    //                         </p>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           country : {data.country}
    //                         </p>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           Address : {data.address}
    //                         </p>
    //                       </div>
    //                       <div className='d-flex mt-3 justify-content-between align-items-center'>
    //                         <p className="card-text  text-primary">
    //                           PINCODE : {data.pincode}
    //                         </p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))
    //         }

    //       </div>
    //       :
    //       <center>
    //         <h3 className='mt-3'>
    //           No User Found
    //         </h3>
    //         <div className="d-flex justify-content-center align-items-center"
    //           style={{ height: '100vh' }}>
    //           <CircularProgress />
    //         </div>
    //       </center>
    //   }
    // </>
    <UsersData userData={userData}/>
  )
}

const getServerSideProps = async () => {
  const res = await axios.get('/api/getusers')
  const userData = res.data.topic
  return {
    props: { userData }
  }
}

export default Dashboard