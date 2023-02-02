import React from 'react'
import styles from './AshvaLogin.module.scss'
import image from "../assets/images/player.webp"

const AshvaLogin = () => {
  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.Leftside}>
          <section className={styles.innerpage}>
            <h1> Welcome Ashva Racing !</h1>
            <p>With our years of domain experience and technology, we have built a
              feature-rich  Our Ashva racing platform for horse racing. </p>
          </section>

        </div>
        <div className={styles.Rightside}>
          <form>
            <section className={styles.innerpage}>
              <h2> Welcome Ashva Racing Platform !</h2>
            </section>
            <div className={styles.inputemail}>
              <lable > Email</lable>
              <input id="email" name="email"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className={styles.inputpassword}>
              <lable >Password</lable>
              <input id="password" name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button className={styles.loginbtn}> Login </button>
          </form>

        </div>

      </div>


    </>
  )
}

export default AshvaLogin