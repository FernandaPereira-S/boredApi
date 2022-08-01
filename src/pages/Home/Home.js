import React from 'react';
import './Home.css'
import imageDesktop from '../../assets/images/image-hero-desktop.png';
import imageMobile from '../../assets/images/image-hero-mobile.png';
import iconDatabiz from '../../assets/images/client-databiz.svg';
import iconAudiophile from '../../assets/images/client-audiophile.svg';
import iconMeet from '../../assets/images/client-meet.svg';
import iconMaker from '../../assets/images/client-maker.svg';

const Home = () => {
  return (
    <main className='home-section'>
      <article className='home-article'>
        <h2 className='home-title'>Make remote work</h2>
        <p className='home-paragraph'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className='home-button'>Learn more</button>
        <div className='div-img'>
          <img src={iconDatabiz} alt='Databiz logo' className='clienteImg' />
          <img src={iconAudiophile} alt='Audiophile logo' className='clienteImg' />
          <img src={iconMeet} alt='Meet logo' className='clienteImg' />
          <img src={iconMaker} alt='Maker logo' className='clienteImg' />
        </div>
      </article>
      <img src={imageDesktop} alt='Desktop img' className='img'/>
      <img src={imageMobile} alt='Mobile img' className='img-mobile'/>
    </main>
  )
}

export default Home