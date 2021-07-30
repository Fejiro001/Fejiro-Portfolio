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
            <input className='input' type="text" placeholder="Your Name" />
            <input className='input' type="text" placeholder="Your Email" />
            <input className='input' type="text" placeholder="Your Subject" />
          </div>
        </div>
        <div className='col'>
          <div className='message'>
            <div>
              <textarea className='input' type="text" placeholder="Your Message" rows='4' />
            </div>
          </div>
        </div>
        <div className='submit'>
          <input className='send' type="button" value="Send Message" />
        </div>
      </div>
    </div>
  );
}

export default Contact;