import {Component} from 'react'
import {Oval} from 'react-loader-spinner'
import ArticleCard from '../ArticleCard'
import './index.css'


class Home extends Component {
    state = {newsList: [], isLoading: true}

    componentDidMount() {
        this.getNewsList()
      }

    getNewsList = async () => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=98d15a150fdb41629b6bfb821b90d23b')
        const data = await response.json()
        const updatedData = data.articles.map(eachArticle => ({
          author: eachArticle.author,
          title: eachArticle.title,
          description: eachArticle.description,
          url: eachArticle.url,
          urlToImage: eachArticle.urlToImage,
        }))
        console.log(updatedData)
        this.setState({newsList: updatedData, isLoading: false})
      }
 


    render(){
        const {newsList, isLoading} = this.state
        return (
            isLoading ? (
                <div>
                  <Oval visible={true} height="60" width="80" color="#4fa94d" ariaLabel="oval-loading"/>
                </div>
              ) : (
              <div className="bg-container">
                <div className="app-container">
                <h1 className="main-heading">NEWS ARTICLES</h1>
                    <div className="article-container">
                        <ul className="news-item">
                            {newsList.map(eachArticle =>(
                                <ArticleCard key={eachArticle.title} ArticleDetails={eachArticle}/>
                            ))}
                        </ul>
                    </div>
                </div>
              </div>
              )
        )
    }
}

  export default Home