import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { RiCopyrightLine } from "react-icons/ri"

const Footer = () => {
  return (
    <div className='footer'>
      <h2>FEJIRO</h2>
      <div className='social'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
        <FiLinkedin />
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