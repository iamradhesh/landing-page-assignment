import React from 'react';
import './SecondHeroSection.css';
import globe from '../../Assets/globe.png';
import subtract from '../../Assets/Subtract.png';
import img_1 from '../../Assets/1.png';
import img_2 from '../../Assets/2.png';
import img_3 from '../../Assets/3.png';
import img_4 from '../../Assets/4.png';
import img_5 from '../../Assets/5.png';
import img_6 from '../../Assets/6.png';
import img_7 from '../../Assets/7.png';
import img_8 from '../../Assets/8.png';
import heart from '../../Assets/Heart.png'
import page from '../../Assets/Page 1.png'

import frame1 from '../../Assets/f1.png'
import frame2 from '../../Assets/f2.png'
import frame3 from '../../Assets/f3.png'

const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8,page,heart];

const SecondHeroSection = () => {
  return (
    <div className='second-container'>
      <div className='fan-heading'>
        <h2 className='bg-gradient-to-r from-white to-gray-400 inline-block text-transparent bg-clip-text'>
          FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation
        </h2>
      </div>
      <div className='para-container'>
        <p className='bg-gradient-to-r from-white to-gray-400 inline-block text-transparent bg-clip-text'>
          FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community-driven consumption
        </p>
      </div>
      <div className='image-container'>
        <div className='person-img-arc'>
            {images.map((image, index) => (
                <img key={index} src={image} alt='' className={`person-img img-${index + 1}`} />
            ))}
            </div>
            <div className='subtract'>
            <img src={subtract} alt='' />
            </div>
            <div className='globe'>
            <img src={globe} alt='' />
            </div>
        
      </div>

      <div className='frame-container-2'>
            <div className='frame-1'>
                <img src={frame1} alt='' loading='lazy' />
            </div>
            <div className='frame-2'>
                <img src={frame2} alt=''  loading='lazy'/>
            </div>
            <div className='frame-3'>
                <img src={frame3} alt='' loading='lazy' />
            </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;
