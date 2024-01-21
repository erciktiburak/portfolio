import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./Home.css"

const home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Lemmy Hetfield.</span> Software Engineer
          </h1>

          <p className="home__description">
            Experienced Software Engineer with 3 years of hands-on experience. Specialized in developing cutting-edge solutions for diverse e-commerce applications, leveraging a strong technology skill set. Proficient in utilizing full-stack knowledge to create scalable, user-centered website designs. Skilled in large system architecture development and administration, as well as network design and configuration. Committed to staying current with emerging technologies and applying strategic thinking to optimize software solutions. Passionate about contributing to the success of innovative projects through collaboration and continuous learning.
          </p>

          <Link to='/about' className='button'>
             More About Me <span className='button_icon'>
              <FaArrowRight />
             </span>
          </Link>
        </div>
      </div>

      <div className="color__block">

      </div>
    </section>
  )
}

export default home