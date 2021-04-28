import React from 'react'
import NewsCard from './NewsCard'
import "./news.css"

const NewsComp = () => {
    return (
        <div className="row ">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}

export default NewsComp
