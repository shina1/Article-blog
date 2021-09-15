import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView'
import ArticlesDetialsView from './containers/ArticlesDetialsView';
// import CustomForm from './Components/Form'
import Text from './Components/Text'

const App = () => {
  return (
    <Router>
      <Route exact path='/new' component={Text} /> 
      <CustomLayout>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/:articleID' component={ArticlesDetialsView}/>
      </CustomLayout>
    </Router>
  )
}

export default App

