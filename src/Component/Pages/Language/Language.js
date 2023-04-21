import React from 'react'
import style from "./Language.module.css"
import NavigationBar from '../../NavigationBar/NavigationBar'

function Language() {
  return (
    <>
    <NavigationBar />
    <div className={style.body}>
    <h1>Select your preferred language</h1>
    <div className={style.main}>
      <div>English</div>
      <div>Hindi</div>
      <div>Marathi</div>
    </div>

    <div className={style.main}>
      <div>English</div>
      <div>Hindi</div>
      <div>Marathi</div>
    </div>
    </div>
    </>
  )
}

export default Language
