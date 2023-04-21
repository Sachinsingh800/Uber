import React from 'react'
import style from "./Drive.module.css"
import { AiFillCar} from 'react-icons/ai';
import { GiNetworkBars} from 'react-icons/gi';
import { AiOutlineKey} from 'react-icons/ai';
import Business from '../../Sections/Business/Business';
import RidewithUber from '../../Sections/RidewithUber/RidewithUber';
import Image from "../../Images/bg.png"
import NavigationBar from '../../NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';




function Drive() {

  return (
    <>
    <NavigationBar />
    <div className={style.main}>
    <img className={style.img} src={Image} alt='bg' />
      <div className={style.ride}>
      <div  className={style.container}> 
      <div className={style.head}>
        <div>
      <Link to={"/"} ><span className={style.icon}><AiFillCar /></span></Link> 
        <p>Ride</p>
        </div>
    <div>
    <span className={style.icon}><GiNetworkBars /></span>
    <p>Driver or deliver</p>
    </div>
    <div>
    <span className={style.icon}><AiOutlineKey /></span>
    <p>Rent your fleet</p>
    </div>
      
      </div>
      <div className={style.middlepart}>
        <h1>Get in the driver's seat and get paid</h1>
        <p>Drive on the platform with the largest network of active riders.</p>
      </div>
      <div className={style.button}>
      <button>Sign up to drive</button>
      </div>
     
      </div></div>
    </div>
    <Business />
    <RidewithUber />
   </>
  )
}

export default Drive
