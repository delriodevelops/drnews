import Link from 'next/link'
import React from 'react'
import {AiOutlineHome,AiOutlineSearch,AiOutlineBars} from 'react-icons/ai'

const Footer = ({selected}) => {
  return (
    <>
        <footer>
            <Link href="/"><AiOutlineHome id='home'/></Link>
            <Link href="search"><AiOutlineSearch id='search'/></Link>
            <Link href="category"><AiOutlineBars id="cat"/></Link>
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

                footer svg {
                    width:48px;
                    height:48px;
                    padding:8px;
                    border-radius:50%;
                }
                footer svg path {
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