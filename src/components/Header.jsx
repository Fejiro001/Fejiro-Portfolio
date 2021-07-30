import { FiChevronDown, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <nav className='header'>
      <h2 className='logo'>FEJIRO</h2>
      <ul>
        <li>
          <a href= '/' className='links'>Home</a>
        </li>
        <li>
          <a  className='links'>Services</a>
        </li>
        <li>
          <a  className='links'>Resume</a>
        </li>
        <li>
          <a  className='links'>Projects</a>
        </li>
        <li>
          <a  className='links'>Blog</a>
        </li>
        <li>
          <a  className='links'>Contact</a>
        </li>
        <li>
          <a  className='links'>Pages
          <FiChevronDown className='down'/></a>
        </li>
      </ul>
      <FiMenu className='menu'/>
      </nav>
  );
}

export default Header;