import React from 'react'
import style from "./Ride.module.css"
import { AiFillCar} from 'react-icons/ai';
import { GiNetworkBars} from 'react-icons/gi';
import { AiOutlineKey} from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Ride() {
  
  return (
    <div>
         <div  className={style.container}> 
      <div className={style.head}>
        <div>
        <span className={style.icon}><AiFillCar /></span>
        <p>Ride</p>
        </div>
    <div>
   <Link to={"/Drive"} ><span className={style.icon}><GiNetworkBars /></span></Link>
    <p>Driver or deliver</p>
    </div>
    <div>
    <span className={style.icon}><AiOutlineKey /></span>
    <p>Rent your fleet</p>
    </div>
      
      </div>
      <div className={style.middlepart}>
        <h1>Request a ride now</h1>
        <input placeholder='Enter pickup location' />
        <input placeholder='Enter destination' />
      </div>
      <div className={style.button}>
      <button>Request now</button>
      <button>Schedule for later</button> 
      </div>
     
      </div>
    </div>
  )
}

export default Ride
