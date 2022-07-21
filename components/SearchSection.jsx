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
            {!!news && 
                      <>
                          <SearchItem news={news}/>
                          {!!loading
                            ? <Spinner/>
                            : <button onClick={newArticles}>Load More</button>
                          }
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
        font-family: 'Montserrat', sans-serif;
      }
      html,body,main{
        background:#000;
        margin: 0;
        padding:0;
        display:grid;
        place-items:center;
        scroll-behavior:smooth;
        scroll-snap-type: y mandatory;
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
          cursor:pointer;
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
        

        .angel {
            display:grid;
            place-items:center;
            width:100vw;
            overflow:hidden;
            background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
                    
        main {
          width:clamp(300px,100vw,600px);
        }
        html {
          overflow-x:hidden;
        }
        

      `}
      </style>
    </>
  )
}

export default NewsSection