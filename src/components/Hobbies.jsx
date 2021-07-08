import { FiSmartphone, FiMusic, FiVideo, FiMonitor, FiActivity, FiBook, FiPenTool, FiWatch, FiTarget, FiCpu } from "react-icons/fi";

const Hobbies = () => {
  return (
    <div className='hobbies'>
      <h2>HOBBIES & INTERESTS</h2>
      <div className='row'>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiMonitor className='icon'/>
              <div className='line'></div>
              <h6>Developing</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiMusic className='icon'/>
              <h6>Music</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiVideo className='icon'/>
              <h6>Movies</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiWatch className='icon'/>
              <h6>Games</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiPenTool className='icon'/>
              <h6>Drawing</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiBook className='icon'/>
              <h6>Reading</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiSmartphone className='icon'/>
              <h6>Android</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiTarget className='icon'/>
              <h6>Sports</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiCpu className='icon'/>
              <h6>Computers</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiActivity className='icon'/>
              <h6>Other Activity</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiActivity className='icon'/>
              <h6>Other Activity</h6>
            </div>
          </div>
        </div>
        <div className='allitems'>
          <div className='interests'>
            <div className='item'>
              <FiActivity className='icon'/>
              <h6>Other Activity</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;