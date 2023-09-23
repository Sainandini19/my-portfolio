import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-body">
        <h1 className="home-heading">About me</h1>
        <hr className="horizontal-line" />
        <p className="name">Hello, I'm Sainandini.</p>
        <p className="description1">
          a passionate and dedicated developer with a versatile skill set that
          spans both frontend and backend technologies.
        </p>
        <p className="description">
          I enjoy taking complex problems and turning them into a simple and
          beautiful interface designs. I also love the logic and structure of
          coding and always strive to write elegant and efficient code.
        </p>
      </div>
      {/* <p>
          A passionate Front End Developer and Back End Developer having an
          experience of building web applications with JavaScript/ Reactjs / Nodejs{' '}
        </p> */}
      {/* <p>
        a passionate and dedicated developer with a versatile skill set that
        spans both frontend and backend technologies.
      </p> */}
    </div>
  </>
)

export default Home
