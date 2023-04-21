import React from 'react'
import style from "./Business.module.css"

function Business() {
  return (
    <div className={style.main}>
        <div className={style.para}>
            <h1>Uber for Business</h1>
            <p>Transform the way your moves and feeds its people</p>
            <button>see how</button>
        </div>
      <div><img className={style.img}  src={"https://as1.ftcdn.net/v2/jpg/03/89/32/38/1000_F_389323842_Qw4CUMPe0byxHsvc19jvrt6EVv0dtEX9.jpg"} alt="img"/></div>
    </div>
  )
}

export default Business
