import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import profile_img from '../../assets/David Carver.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="David Carver" className='profile-img' />
      <h1><span>I'm David Carver,</span> frontend developer based in Sydney, Australia.</h1>
      <p>I am a frontend developer from Australia with 2 years of experience in companies like Amazon, Google and Department of Transport, NSW.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link to="/contact" className='anchor-link'>Connect with me</Link>
        </div>
        <div className="hero-resume">
          <Link to="/resume" className='anchor-link'>My resume</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero