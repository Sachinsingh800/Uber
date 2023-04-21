import React from 'react'
import style from "./HomePage.module.css"
import Business from '../../Sections/Business/Business';
import RidewithUber from '../../Sections/RidewithUber/RidewithUber';
import Image from "../../Images/bg.png"
import Ride from '../../Sections/Home/Ride';

function HomePage() {
  return (
    <>
    <div className={style.main}>
    <img className={style.img} src={Image} alt='bg' />
      <div className={style.ride}><Ride /></div>
    </div>
    <Business />
    <RidewithUber />
   </>
  )
}

export default HomePage
