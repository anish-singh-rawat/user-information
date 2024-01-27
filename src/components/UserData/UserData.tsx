'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UsersData from '../UsersData'

const UserData = () => {
  const [userData, setUserData] = useState<any>([])
  useEffect(() => {
    const allUser =async()=>{
      const res =  await axios.get('/api/getusers')
      setUserData(res.data.topic)      
    }
    allUser();
  }, [])

  return (
    <UsersData userData={userData}/>
  )
}
export default UserData