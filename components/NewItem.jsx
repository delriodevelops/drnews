import React from 'react'
import{ ImEarth} from 'react-icons/im'
import {AiOutlineBook} from 'react-icons/ai'

const today = new Date().toLocaleDateString()

const newItem = ({news}) => {
  
  return (
    <>
        {!(news===0)&& news.map(({multimedia,title,byline,url,first_published_date,abstract,kicker})=>
          <article key={url}>
          {!!kicker && <small className='kicker'><AiOutlineBook/>{kicker}</small>}
          {!!multimedia && <img  src={multimedia[2].url}/>}
          <h2>{title}</h2>
          {!!abstract && <p>{abstract}</p>}
          <a href={url} target="_blank" rel="noopener noreferrer">See More <ImEarth/></a>
          <small>{byline} {new Date(first_published_date).toLocaleDateString()!==today ? 'ON '+ new Date(first_published_date).toLocaleDateString() :'AT '+ new Date(first_published_date).toLocaleTimeString('en-US')}</small>
        </article>
        )}
        <style jsx global>
          {`
          article {
          height:100%;
          display:grid;
          max-width:584px;
          padding:8px 0 24px;
          border-bottom:solid 1px rgba(255,255,255,.3);
          scroll-snap-align: center;
        }
        article a {
          color:auto;
          border-radius:24px;
          padding:12px 24px;
          text-decoration:none;
          display:grid;
          place-items:center;
          grid-template-columns:max-content max-content;
          gap: 8px;
          margin:12px 0 24px;
          background:#09d;
          width:fit-content;
        }
        article p {
          margin-top:0px;
        }
        article small {
          font-size:10px;
        }
        .kicker {
          color:#000;
          font-weight:700;
          width:fit-content;
          height:fit-content;
          background:#f90;
          padding:6px;
          margin:6px;
          font-size:12px;
          display:grid;
          place-items:center;
          grid-template-columns:max-content max-content;
          gap:4px;
        }
        img {
          width:100%;
          
          border-radius:12px;
        }
          `}
        </style>
    </>
  )
}

export default newItem