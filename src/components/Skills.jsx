import Progress from "./Progress"

const Skills = () => {
  return (
    <div className='skills'>
      <h2>WORK EXPERTISE</h2>
      <div className='show'>
        <div className='left'>
          <div>
            <ul className='type'>
              <li>Web Development</li>
              <li>Android Development</li>
              <li>Language Skill</li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <div className='web'>
            <ul className='contains'>
              <div className='program'>
                <h6> HTML</h6>
                <Progress />
              </div>
              <div className='program'>
                <h6>CSS</h6>
                <Progress />
              </div>
              <div className='program'>
                <h6>JavaScript</h6>
                <Progress />
              </div>
              <div className='program'>
                <h6>React.js</h6>
                <Progress />
              </div>
            </ul>
          </div>
          <div className='android'>
            <ul className='contains'>
              <div className='program'>
                <h6>XML</h6>
                <Progress />
              </div>
              <div className='program'>
                <h6>Java</h6>
                <Progress />
              </div>
            </ul>
          </div>
          <div className='lang'>
            <ul className='contains'>
              <div className='program'>
                <h6>English</h6>
                <Progress />
              </div>
              <div className='program'>
                <h6>Korean</h6>
                <Progress />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;