import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='contactme'>
      <h2>CONTACT ME</h2>
      <div className='contacts'>
        <div>
          <FiPhone className='icons' />
          <h5>PHONE</h5>
          <a href="tel:+2348075853868">+2348075853868</a>
        </div>
        <div>
          <FiMail className='icons' />
          <h5>EMAIL</h5>
          <a href="mailto:aberefejiro@gmail.com">aberefejiro@gmail.com</a>
        </div>
        <div>
          <FiMapPin className='icons' />
          <h5>LOCATION</h5>
          <a href="mailto:aberefejiro@gmail.com">View on Google Map</a>
        </div>
      </div>
      <div className='form'>
        <div className='col'>
          <div className='info'>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Subject" />
          </div>
        </div>
        <div className='col'>
          <input type="text" placeholder="Your Message" />
        </div>
        <div>
          <input type="button" value="Submit" />
        </div>
      </div>
    </div>
  );
}

export default Contact;