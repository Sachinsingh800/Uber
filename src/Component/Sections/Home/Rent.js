import React from 'react'
import style from "./Rent.module.css"
import { AiFillCar} from 'react-icons/ai';
import { GiNetworkBars} from 'react-icons/gi';
import { AiOutlineKey} from 'react-icons/ai';
import Business from '../../Sections/Business/Business';
import RidewithUber from '../../Sections/RidewithUber/RidewithUber';
import Image from "../../Images/bg.png"
import NavigationBar from '../../NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';




function Rent() {

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
   <Link to={"/Drive"} ><span className={style.icon}><GiNetworkBars /></span></Link>
    <p>Driver or deliver</p>
    </div>
    <div>
    <Link to={"/Rent"}><span className={style.icon}><AiOutlineKey /></span></Link>
    <p>Rent your fleet</p>
    </div>
      
      </div>
      <div className={style.middlepart}>
        <h1>Make money by renting out your car</h1>
        <p>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
      </div>
      <div className={style.button}>
      <button>Get started</button>
      </div>
     
      </div></div>
    </div>
    <Business />
    <RidewithUber />
   </>
  )
}

export default Rent
