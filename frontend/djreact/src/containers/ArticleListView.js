import React, {useState, useEffect} from 'react'
import Articles from '../Components/Articles'
import axios from 'axios' 

const ArticleListView = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
      axios.get('http://127.0.0.1:8900/api/')
      .then( res=> {
          setArticles(res.data)
      })
    }, [])
    return (
        <div>
            <Articles data={articles}/>
        </div>
    )
}

export default ArticleListView
