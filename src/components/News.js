import propTypes from 'prop-types'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import React, {useEffect,useState} from 'react'

export default function News(props) {
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  // document.title=`News-${this.props.category}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=ca9f97dbb5d44aaebe003fa4be65f20e&page=1&pageSize=20`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

    const handleNext=async ()=>{
      if(page+1>Math.ceil(totalResults/20)){
        
      }else{
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=ca9f97dbb5d44aaebe003fa4be65f20e&page=${page+1}&pageSize=20`;
        setLoading(true)
        let data=await fetch(url)
        let parseData = await data.json()
        // console.log(parseData)
        // setLoading(false)
        setPage(page+1)
        setArticles(parseData.articles)
        setLoading(false)
      }
    }
  
    const handlePrev=async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=ca9f97dbb5d44aaebe003fa4be65f20e&page=${page-1}&pageSize=20`;
      setLoading(false)
      let data=await fetch(url)
      let parseData = await data.json()
      console.log(parseData)
      setPage(page-1)
      setArticles(parseData.articles)
      setLoading(false)
    }
    


  return (
        <div className='container my-3'>
          <h2 style={{margin:'35px,0px',marginTop:'90px'}}>News Teller - Latest news</h2>
          {loading&&<Spinner/>}
          <div className='row'>
            {!loading&&articles.map((element => {
              return <div className='col-md-4'>
                <NewsItem newsURL={element.url} key={element.url} title={element.title ? element.title.slice(0, 101) : ""} description={element.description ? element.description.slice(0, 91) + "..." : ""} imgURL={element.urlToImage ? element.urlToImage : "https://cruisesouthampton.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"} author={element.author} date={element.publishedAt}/>
              </div>
            }))}
          </div>
          <div className="d-flex justify-content-between my-3">
            <button type="button" disabled={page<=1} className="btn btn-primary" onClick={handlePrev}>Prev</button>
            <button type="button" disabled={page+1>Math.ceil(totalResults/20)} className="btn btn-primary" onClick={handleNext}>Next</button>
          </div>
        </div>
  )
}


News.defaultProps={
  country:'in',
  category:'business'
}
News.propTypes ={
  country:propTypes.string,
  category:propTypes.string
}




// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';

// export default function News(props) {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=ca9f97dbb5d44aaebe003fa4be65f20e&page=${page}&pageSize=20`;
//         setLoading(true);
//         let data = await fetch(url);
//         let parseData = await data.json();
//         console.log(parseData);
//         setArticles(prevArticles => [...prevArticles, ...parseData.articles]); // Concatenate new articles to existing ones
//         setTotalResults(parseData.totalResults);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]); // Fetch data whenever the page changes

//   // Function to handle scroll event
//   const handleScroll = () => {
//     // Check if the user has scrolled to the bottom of the page
//     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
//       // Load more articles if there are more pages
//       if (page < Math.ceil(totalResults / 20)) {
//         setPage(prevPage => prevPage + 1);
//       }
//     }
//   };

//   // Add scroll event listener when component mounts
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className='container my-3'>
//       <h2 style={{ margin: '35px 0', marginTop: '90px' }}>News Teller - Latest news</h2>
//       {loading && <Spinner />}
//       <div className='row'>
//         {!loading &&
//           articles.map(element => (
//             <div className='col-md-4' key={element.url}>
//               <NewsItem
//                 newsURL={element.url}
//                 title={element.title ? element.title.slice(0, 101) : ''}
//                 description={element.description ? element.description.slice(0, 91) + '...' : ''}
//                 imgURL={element.urlToImage ? element.urlToImage : 'https://cruisesouthampton.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
//                 author={element.author}
//                 date={element.publishedAt}
//               />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// News.defaultProps = {
//   country: 'in',
//   category: 'business'
// };

// News.propTypes = {
//   country: PropTypes.string,
//   category: PropTypes.string
// };
