import React,{useState,useEffect} from 'react';
import './Header.css';

function Header() {

  const [showHeaderBar, setShowHeaderBar] = useState(true);

  const contactHandler = () => {
    setShowHeaderBar(!showHeaderBar);
  }

  return (
    <div className="header">
      <div id="header__bar" style = {{transform: showHeaderBar? `translateY(120px)`: `translateY(0px)`}}>
        <h3 className="header__bar__title">Vineet Yadav</h3>
        <div className="header__bar__icons">
          <a href="https://www.facebook.com/profile.php?id=100015693550921" target='_blank'><img src="https://img.icons8.com/ios/50/000000/facebook--v1.png"/></a>
          <a href="https://www.instagram.com/vineet_yadav4169/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/></a>
          <a href="https://github.com/yadav-VINEET" target='_blank'><img src="https://img.icons8.com/ios/50/000000/github--v1.png"/></a>
          <a href="https://www.linkedin.com/in/vineet-yadav-a60260228/" target='_blank'><img src="https://img.icons8.com/ios/50/000000/linkedin.png"/></a>
        </div>
      </div>

      <a href="/"><div className="header-logo">Sorting<span>Visualizer</span></div></a>
      <div className="header__options">
         <h3 className="header__option" onClick = {contactHandler}>Connect</h3>
      </div>
   </div>
  )
}

export default Header;