import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card} from 'antd'

const ArticlesDetialsView = (props) => {
    const [article, setArticle] = useState([])

    const articleID = props.match.params.articleID;
    useEffect(() => {
      axios.get(`http://127.0.0.1:8900/api/${articleID}`)
      .then( res=> {
          setArticle(res.data)
        //   console.log('data from the backend',article); 
      })
    }, [articleID])
    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
        </div>
    )
}

export default ArticlesDetialsView
