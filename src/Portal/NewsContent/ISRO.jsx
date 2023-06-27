import React, { useEffect, useState } from 'react';
import './news.css';


const ISRO = () => {
    const [isroNews, setIsroNews] = useState([]);

    useEffect(() => {
        fetchIsroNews();
    }, []);

    const apiUrl = 'https://api.newscatcherapi.com/v2/search?q=ISRO';

    const fetchIsroNews = async () => {

        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'x-api-key': 'k1JEO6EGWczlbAHwh5ICMPzTASZ5_rcFexifwr8nNnM'
                }
            });
            const data = await response.json();
            setIsroNews(data.articles);

        } catch (err) {
            console.log(err);
        }
    }




    return (
        <div>
            <h2>ISRO News</h2>
            
            {isroNews.map((news) => (
                <div key={news._id} className='newsbox'>
                    <h3 className='news.title'>{news.title}</h3>
                    <p className='news.summary'>{news.summary}</p>
                    <p className='news.date'>
                        {news.published_date}
                    </p>

                </div>
            ))}
        </div>
    )
};

export default ISRO;
