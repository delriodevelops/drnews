import React from 'react'
import{ ImEarth} from 'react-icons/im'
import {AiOutlineBook} from 'react-icons/ai'

const prefix ='https://static01.nyt.com/'

const newItem = ({news}) => {
  
  return (
    <>
        {!(news===0)&& news.map(({multimedia,web_url,source,publishedAt,abstract,headline})=>
          { const imag = multimedia[0]
            return(
              <article key={web_url}>
                {!!multimedia.url && <img src={prefix+imag.url}/>}
                <h2>{headline.main}</h2>
                {!!abstract && <p>{abstract}</p>}
                <a href={web_url} target="_blank" rel="noopener noreferrer">See More <ImEarth/></a>
                <small>{source.name} {publishedAt}</small>
              </article>)}
        )}
        <style jsx>
            {` 
        article {
          height:100%;
          max-width:584px;
          display:grid;
          padding:8px 0 24px;
          border-bottom:solid 1px rgba(255,255,255,.3);
          scroll-snap-align: start;
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
        img {
          width:100%;
          
          height:100%;
          
          border-radius:12px;
        }`}
        </style>
    </>
  )
}

export default newItem