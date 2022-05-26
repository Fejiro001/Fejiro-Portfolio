import img from './img.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='introduction'>
        <h1 className='intro'>Hello, <br /> I'm <span>Fejiro Abere</span> </h1>
        <p className='introduce'>I'm a web developer with 1 year of experience and android developer with 2 years of experience.</p>
      </div>

      <div className='image'>
      <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Home;