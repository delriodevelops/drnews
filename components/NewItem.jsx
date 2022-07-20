import React from 'react'
import{ ImEarth} from 'react-icons/im'


const newItem = ({news}) => {
  return (
    <>
        {!(news===0)&& news.map(({urlToImage,title,description,author,content,url,source,publishedAt})=>
          <article key={url}>
          <img src={urlToImage} alt="Image" loading='lazy' title={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">See More <ImEarth/></a>
          <small>{source.name} {publishedAt}</small>
        </article>
        )}
        <style jsx>
            {` article {
          height:100%;
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
          width:374px;
          
          min-height:196px;
          height:100%;
          border-radius:12px;
        }`}
        </style>
    </>
  )
}

export default newItem