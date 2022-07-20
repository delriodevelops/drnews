import React from 'react'
import {AiOutlineHome,AiOutlineSearch,AiOutlineBars} from 'react-icons/ai'

const Footer = ({selected}) => {
  return (
    <>
        <footer>
            <a href="/"><AiOutlineHome id='home'/></a>
            <a href="search"><AiOutlineSearch id='search'/></a>
            <a href="category"><AiOutlineBars id="cat"/></a>
        </footer>
        <style jsx global>
            {`
                footer {
                    position:fixed;
                    width:100%;
                    bottom:0;
                    color:#fff;
                    background:rgba(0,0,0,.7);
                    display:grid;
                    place-items:center;
                    grid-template-columns:1fr 1fr 1fr;
                    backdrop-filter:blur(4px);
                    padding:8px;
                }

                footer a svg {
                    width:48px;
                    height:48px;
                    padding:8px;
                    border-radius:50%;
                }
                footer a svg path {
                    color:#ff9900;
                }
                #${selected} {
                    background:#ff990033;
                }
                
            `}
        </style>
    </>
  )
}

export default Footer