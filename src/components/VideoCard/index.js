import './index.css'
import ThemeContext from '../../context/ThemeContext'

const VideoCard = props => {
  const {productData} = props
  const {
    thumbnailUrl,
    title,
    viewCount,
    publishedAt,

    profileImageUrl,
    channelName,
  } = productData

  const today = new Date()
  const videoPublishedDate = new Date(publishedAt)
  const publishedDateData =
    today.getFullYear() - videoPublishedDate.getFullYear()

  const m = today.getMonth() - videoPublishedDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < videoPublishedDate.getDate())) {
    return publishedDateData
  }

  const publishedDate = publishedDateData

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const heading = isDarkTheme ? 'heading-dark' : 'heading-light'

        return (
          <li className="product-item">
            <img src={thumbnailUrl} alt="product" className="thumbnail" />
            <div className="bottom-card-item">
              <div className="profile-img-container">
                <img
                  src={profileImageUrl}
                  alt="icon"
                  className="profile-image"
                />
              </div>

              <div>
                <h1 className={`title ${heading}`}>{title}</h1>
                <p className="name">{channelName}</p>
                <div className="product-details">
                  <p className="published">{viewCount} views </p>
                  <p className="published">. {publishedDate} years ago</p>
                </div>
              </div>
            </div>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoCard
