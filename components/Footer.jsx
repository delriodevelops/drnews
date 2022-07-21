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
                    width:clamp(300px,100vw,600px);
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
                    cursor:pointer;
                }
                footer svg:hover {
                    background:#ff99002f;
                    transition: all .3s ease;
                }
                footer svg:hover > path {
                    transition: all .3s ease;
                    color:#c90;
                }

                footer svg path {
                    color:#ff9900;
                }
                #${selected} {
                    background:#ff99006f;
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

export default Footer