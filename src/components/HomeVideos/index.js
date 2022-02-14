import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import './index.css'
import {AiOutlineSearch} from 'react-icons/ai'
import VideoCard from '../VideoCard'
import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeVideos extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,

    searchInput: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(product => ({
        thumbnailUrl: product.thumbnail_url,
        title: product.title,
        viewCount: product.view_count,
        id: product.id,
        publishedAt: product.published_at,
        channelName: product.channel.name,

        profileImageUrl: product.channel.profile_image_url,
      }))

      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  enterSearchInput = () => {
    this.getProducts()
  }

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderProductsListView = () => {
    const {productsList, activeOptionId, searchInput} = this.state
    console.log(searchInput)
    console.log(activeOptionId)
    console.log(productsList)

    const shouldShowProductsList = productsList.length > 0

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const searchBar = isDarkTheme ? 'search-bar-light' : 'search-bar-dark'
          const searchBarBtn = isDarkTheme
            ? 'search-btn-dark'
            : 'search-btn-light'

          return shouldShowProductsList ? (
            <div className="all-products-container">
              <div className="search-container">
                <input
                  type="search"
                  className={searchBar}
                  placeholder="search"
                />
                <button type="button" className={`search-btn ${searchBarBtn}`}>
                  <AiOutlineSearch />
                </button>
              </div>
              <ul className="products-list-display">
                {productsList.map(product => (
                  <VideoCard productData={product} key={product.id} />
                ))}
              </ul>
            </div>
          ) : (
            <div className="no-products-view">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                className="no-products-img"
                alt="no products"
              />
              <h1 className="no-products-heading">No Products Found</h1>
              <p className="no-products-description">
                We could not find any products. Try other filters.
              </p>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const background1 = isDarkTheme
            ? 'body-background-dark'
            : 'body-background-light'

          return (
            <div className={`body-background ${background1}`}>
              {this.renderAllVideos()}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeVideos
