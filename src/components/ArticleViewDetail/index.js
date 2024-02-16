
import './index.css'

const ArticleViewDetail = props => {
  const {Details} = props
  const {title, urlToImage, description} = Details
  return(
    <div className="main-article-container">
      <img className="article-image" src={urlToImage} alt={title}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

  export default ArticleViewDetail