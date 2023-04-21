import React from 'react'
import style from "./HomePage.module.css"
import Business from '../../Sections/Business/Business';
import RidewithUber from '../../Sections/RidewithUber/RidewithUber';
import Image from "../../Images/bg.png"
import Ride from '../../Sections/Home/Ride';
import { Link } from 'react-router-dom';



function HomePage() {

  return (
    <>
    <div className={style.main}>
    <img className={style.img} src={Image} alt='bg' />
      <Link to={"/Drive"} /> <div className={style.ride}><Ride  /></div> <Link/>
    </div>
    <Business />
    <RidewithUber />
   </>
  )
}

export default HomePage
