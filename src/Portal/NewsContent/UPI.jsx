import React, { useEffect, useState } from 'react';

const UPI = () => {
    const [upiNews, setUpiNews] = useState([]);
    const apiUrl = 'https://api.newscatcherapi.com/v2/search?q=UPI';

    useEffect(() => {
        fetchUPi();
    }, []);

    const fetchUPi = async () => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'x-api-key': 'k1JEO6EGWczlbAHwh5ICMPzTASZ5_rcFexifwr8nNnM'
                }
            });
            const data = await response.json();
            setUpiNews(data.articles);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
      <h2>UPI News</h2>
      {upiNews.map((news) => (
        <div key={news._id}>
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
          <p>{news.published_date}</p>
        </div>
      ))}
    </div>
    )

};

export default UPI;
