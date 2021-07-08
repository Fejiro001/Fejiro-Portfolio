const Skills = () => {
  return (
    <div className='skills'>
      <h2>WORK EXPERTISE</h2>
      <div className='show'>
        <div className='left'>
          <ul className='type'>
            <li>Web Development</li>
            <li>Android Development</li>
            <li>Language Skill</li>
          </ul>
        </div>
        <div className='right'>
          <div className='web'>
            <ul className='contains'>
              <div>
                <h6> HTML</h6>
                <div className='progressbar'>
                  <div className='progress'></div>
                </div>
              </div>
              <div><h6>CSS</h6></div>
              <div><h6>JavaScript</h6></div>
              <div><h6>React.js</h6></div>
            </ul>
          </div>
          <div className='android'>
            <ul className='contains'>
              <div><h6>XML</h6></div>
              <div><h6>Java</h6></div>
            </ul>
          </div>
          <div className='lang'>
            <ul className='contains'>
              <div><h6>English</h6></div>
              <div><h6>Korean</h6></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;