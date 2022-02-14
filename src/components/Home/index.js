import './index.css'
import LeftNavbar from '../LeftNavbar'
import TopNavBar from '../TopNavBar'
import NxtWatchPremium from '../NxtWatchPremium'
import HomeVideos from '../HomeVideos'

const Home = () => {
  console.log('t')
  return (
    <>
      <TopNavBar />
      <div className="home-body">
        <LeftNavbar />
        <div className="body-container">
          <NxtWatchPremium />
          <HomeVideos />
        </div>
      </div>
    </>
  )
}

export default Home
