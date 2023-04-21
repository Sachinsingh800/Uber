import React from 'react'
import style from "./RidewithUber.module.css"

function RidewithUber() {
  return (
    <div className={style.main}>
      <h1>Ride with Uber</h1>
  <div className={style.tablebox}>
   <div className={style.container}>
      <img src={"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"} alt="auto" />
        <div className={style.contain} >
        <h4>Uber Auto</h4>
        <p>Get affordable Uber Auto rides with no haggling.Request Uber Auto and ride comfortable around your city.</p>
        </div>
        <span className={style.span}>→</span>
      </div>

   <div className={style.container}>
      <img src={"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png"} alt="auto" />
        <div className={style.contain} >
        <h4>Uber Auto</h4>
        <p>Get affordable Uber Auto rides with no haggling.Request Uber Auto and ride comfortable around your city.</p>
        </div>
        <span className={style.span}>→</span>
      </div>
      </div>

      <div className={style.tablebox}>
   <div className={style.container}>
      <img src={"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png"} alt="auto" />
        <div className={style.contain} >
        <h4>Uber Auto</h4>
        <p>Get affordable Uber Auto rides with no haggling.Request Uber Auto and ride comfortable around your city.</p>
        </div>
        <span className={style.span}>→</span>
      </div>

   <div className={style.container}>
      <img src={"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png"} alt="auto" />
        <div className={style.contain} >
        <h4>Uber Auto</h4>
        <p>Get affordable Uber Auto rides with no haggling.Request Uber Auto and ride comfortable around your city.</p>
        </div>
        <span className={style.span}>→</span>
      </div>
      </div>




    </div>
  )
}

export default RidewithUber
