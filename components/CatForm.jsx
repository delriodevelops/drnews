import React from 'react'

const CatForm = ({category,setCategory}) => {
  return (
    <>
        <div className='catform'>
            <p onClick={()=>{setCategory('Business')}}>Business</p>
            <p onClick={()=>{setCategory('Entertainment')}}>Entertainment</p>
            <p onClick={()=>{setCategory('Health')}}>Health</p>
            <p onClick={()=>{setCategory('Science')}}>Science</p>
            <p onClick={()=>{setCategory('Sports')}}>Sports</p>
            <p onClick={()=>{setCategory('Technology')}}>Technology</p>
        </div>

        <style jsx>
            {`
                .catform {
                    display:grid;
                    place-items:center;
                    background:#000;
                    color:#fff;
                    height:92vh;
                }
            `}
        </style>
    </>
  )
}

export default CatForm