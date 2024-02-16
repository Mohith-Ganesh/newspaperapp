import {Route, Switch} from 'react-router-dom'
import ArticleViewDetail from './components/ArticleViewDetail'
import Home from './components/Home'
import './App.css';

const App = () => (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articleview/:id" component={ArticleViewDetail} />
        </Switch>
)

export default App;
