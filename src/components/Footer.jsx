import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri"

const Footer = () => {
  return (
    <div className='footer'>
      <h2>FEJIRO</h2>
      <div className='social'>
        <FiFacebook className='socialapp' href='https://web.facebook.com/fejiro.abere'/>
        <FiTwitter className='socialapp'/>
        <FiInstagram className='socialapp'/>
        <FiLinkedin className='socialapp'/>
      </div>
      <div>
        <div>
          <RiCopyrightLine />
          2021 Fejiro.
        </div>
      </div>
    </div>
  );
}

export default Footer;