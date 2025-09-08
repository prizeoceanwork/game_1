import React from 'react'
import RegisterForm from './RegisterForm'
import Stats from './Stats'
const HomePage = () => {
  return (
    <>
     <div style={{backgroundColor: "lightsalmon" , height: "100vh", padding: "20px"}}>
    <div>
      <h1>Welcome to Game Registration</h1>
      <p>Register for exciting games and check out the stats!</p>
    </div>
      <RegisterForm slug={"game1"}/>
      <Stats slug={"game1"}/>
      </div>
    </>
  )
}

export default HomePage
