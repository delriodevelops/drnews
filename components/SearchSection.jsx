import React, { useEffect, useState } from 'react'
import SearchItem from './SearchItem'
import {AiOutlineSearch} from 'react-icons/ai'
import Spinner from './Spinner'


const NewsSection = ({API,setPage,page,q,setQ}) => {

    
    const [loading,setLoading]=useState(true)

    const [news,setNews]=useState([])

    function newArticles(){
        setLoading(true)
        fetch(API)
        .then(res=>res.json())
        .then(async res=>{
          const response=await res.response
          const articles= await response.docs;
          setNews(news.concat(articles))
          setPage(page+1)
          console.log(news)
          console.log(page)
          setLoading(false)
        })
      }

      useEffect(()=>{
        newArticles()
      },[])

  return (
    <>
        <main>
            <section>
                {!!loading 
                  ? <Spinner/>
                  : 
                  <>
                  {news.length!==0 ? <><SearchItem news={news}/><button onClick={newArticles}>Load More</button></>:<><p>No results for &quot;{q}&quot;</p> <span onClick={()=>{setQ('')}}>Search something different <AiOutlineSearch/></span></>}
                  </>
                }
                
            </section>
        </main>

        <style jsx global>
      {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&display=swap');
      a {
        color: inherit;
        text-decoration: none;
      }
      main {
        scroll-snap-align: start;
        min-height:100vh; 
        color:#fff;
        width:100vw;
        font-family: 'Montserrat', sans-serif;
        background:#000;
        
      }
      html,body,main{
        background:#000;
        margin: 0;
        padding:0;
        display:grid;
        place-items:center;
        scroll-behavior:smooth;
        scroll-snap-type: y proximity;
      }
      h1{
        margin:0;
      }
      
      * {
        box-sizing: border-box;
      }
      
      section {
        padding:8px;
        display:grid;
        place-items:center;
      }
       

        section button{
          background:rgba(255,255,255,.4);
          border:none;
          border-radius:12px;
          width:fit-content;
          height:fit-content;
          padding:18px 36px;
          font-size:24px;
          color:#fff;
          margin:24px;
          place-self:center;
          margin-bottom:72px;
        }

        section span {
          display:grid;
          place-items:center;
          grid-template-columns:max-content max-content;
          gap:4px;
          background:#f90;
          border-radius:12px;
          padding:12px 32px;
        }
        

        

      `}
      </style>
    </>
  )
}

export default NewsSection