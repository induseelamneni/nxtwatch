import './index.css'
import LeftNavbar from '../LeftNavbar'
import TopNavBar from '../TopNavBar'

const Home = () => {
  console.log('t')
  return (
    <>
      <TopNavBar />
      <div className="home-body">
        <LeftNavbar />
      </div>
    </>
  )
}

export default Home
