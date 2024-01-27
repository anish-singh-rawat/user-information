'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
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