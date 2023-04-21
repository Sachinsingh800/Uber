import React from 'react'
import style from "./LoginPage.module.css"
import NavigationBar from '../../NavigationBar/NavigationBar'

function LoginPage() {
  return (
    <>
    <NavigationBar />
    <div className={style.body}>
    <div className={style.main}>
      <div>Sign in to drive & deliver →</div>
      <div>Sign in to ride →</div>
    </div>

    <div className={style.main}>
      <div>Sign in to order delivery with Uber Eats →</div>
    </div>
    </div>
    </>
  )
}

export default LoginPage
