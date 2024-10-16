import React from 'react';
import './Home.css';



const Home = () => {
  return (
    <div className='home'>
      <h2>Добро пожаловать в unTaspa</h2>
      <p>Откройте для себя популярные плейлисты и подкасты.</p>
      <form >
        <ul className='cardBox'>
          <li>
          <img 
          src={require('../images/weeknd.png')} 
          alt="weekend" 
          className='card1' />
        The Weekend
          </li>
          <li>
          <img 
          src={require('../images/card2.png')} 
          alt="weekend" 
          className='card2' />
          Bakr</li>
          <li><img 
          src={require('../images/card33.jpg')} 
          alt="weekend" 
          className='card3' />
          Sadraddin</li>
        </ul>
      </form>

    </div>


  );
};

export default Home;
