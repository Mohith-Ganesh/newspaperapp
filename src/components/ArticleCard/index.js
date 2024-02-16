import {Link} from 'react-router-dom'
import './index.css'

const ArticleCard = props => {
    const {MoreDetails} = props
    const {ArticleDetails} = props
    const {author, title, urlToImage} = ArticleDetails
    return (
        <li key={title} className="item">
            <Link to={{pathname: `/articleview/${title}`, state:{MoreDetails:MoreDetails}}} className="link">
            <img className="article-item-image" src={urlToImage} alt={title}/>
            <p className="article-title">{title}</p>
            <p className="article-title">{author}</p>
            </Link>
        </li>
    )
}

export default ArticleCard

