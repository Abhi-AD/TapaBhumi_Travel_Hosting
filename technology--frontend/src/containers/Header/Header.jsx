import { useEffect, useRef } from 'react';
import './Header.css';
import src from '../../assests/video/Header.mp4';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="technology__header section__padding">
      <div className="technology__header-content">
        <h1 className="gradient__text">Infuse, <span className='span1'>Integrate</span><br />
          <span className='span2'>Ignite.</span>
        </h1>
        <p>We are all about pushing limits with innovations.From our solutions to systems, we make tech work seamlessly for you. </p>
        <div className='technology__header-link-btn'>
          <Link to="/contact" className='centered-link'><span>Build With us</span><FaArrowRight className='arrow-icon' /></Link>
          <Link to="/join" className='centered-link'><span>Join us</span><FaArrowRight className='arrow-icon' /></Link>
        </div>

      </div>
      <div className="technology__header-video">
        <video ref={videoRef} controls muted className='video-size'>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
