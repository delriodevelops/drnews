import React, { useState } from 'react'

const CatForm = ({category,setCategory}) => {
    const categories=[
        {
          "section": "admin",
          "display_name": "Admin"
        },
        {
          "section": "arts",
          "display_name": "Arts"
        },
        {
          "section": "automobiles",
          "display_name": "Automobiles"
        },
        {
          "section": "books",
          "display_name": "Books"
        },
        {
          "section": "briefing",
          "display_name": "Briefing"
        },
        {
          "section": "business",
          "display_name": "Business"
        },
        {
          "section": "climate",
          "display_name": "Climate"
        },
        {
          "section": "corrections",
          "display_name": "Corrections"
        },
        {
          "section": "crosswords & games",
          "display_name": "Crosswords & Games"
        },
        {
          "section": "education",
          "display_name": "Education"
        },
        {
          "section": "en español",
          "display_name": "En Español"
        },
        {
          "section": "fashion",
          "display_name": "Fashion"
        },
        {
          "section": "food",
          "display_name": "Food"
        },
        {
          "section": "guides",
          "display_name": "Guides"
        },
        {
          "section": "health",
          "display_name": "Health"
        },
        {
          "section": "home & garden",
          "display_name": "Home & Garden"
        },
        {
          "section": "home page",
          "display_name": "Home Page"
        },
        {
          "section": "job market",
          "display_name": "Job Market"
        },
        {
          "section": "lens",
          "display_name": "Lens"
        },
        {
          "section": "magazine",
          "display_name": "Magazine"
        },
        {
          "section": "movies",
          "display_name": "Movies"
        },
        {
          "section": "multimedia/photos",
          "display_name": "Multimedia/Photos"
        },
        {
          "section": "new york",
          "display_name": "New York"
        },
        {
          "section": "obituaries",
          "display_name": "Obituaries"
        },
        {
          "section": "opinion",
          "display_name": "Opinion"
        },
        {
          "section": "parenting",
          "display_name": "Parenting"
        },
        {
          "section": "podcasts",
          "display_name": "Podcasts"
        },
        {
          "section": "reader center",
          "display_name": "Reader Center"
        },
        {
          "section": "real estate",
          "display_name": "Real Estate"
        },
        {
          "section": "science",
          "display_name": "Science"
        },
        {
          "section": "smarter living",
          "display_name": "Smarter Living"
        },
        {
          "section": "sports",
          "display_name": "Sports"
        },
        {
          "section": "style",
          "display_name": "Style"
        },
        {
          "section": "sunday review",
          "display_name": "Sunday Review"
        },
        {
          "section": "t brand",
          "display_name": "T Brand"
        },
        {
          "section": "t magazine",
          "display_name": "T Magazine"
        },
        {
          "section": "technology",
          "display_name": "Technology"
        },
        {
          "section": "the learning network",
          "display_name": "The Learning Network"
        },
        {
          "section": "the upshot",
          "display_name": "The Upshot"
        },
        {
          "section": "the weekly",
          "display_name": "The Weekly"
        },
        {
          "section": "theater",
          "display_name": "Theater"
        },
        {
          "section": "times insider",
          "display_name": "Times Insider"
        },
        {
          "section": "today’s paper",
          "display_name": "Today’s Paper"
        },
        {
          "section": "travel",
          "display_name": "Travel"
        },
        {
          "section": "u.s.",
          "display_name": "U.S."
        },
        {
          "section": "universal",
          "display_name": "Universal"
        },
        {
          "section": "video",
          "display_name": "Video"
        },
        {
          "section": "well",
          "display_name": "Well"
        },
        {
          "section": "world",
          "display_name": "World"
        },
        {
          "section": "your money",
          "display_name": "Your Money"
        }
      ]

      const [cat,setCat]=useState('')

      function handleTyping(e) {
        setInputValue(e.target.value)
        console.log(cat)
      }

      const [inputValue,setInputValue]=useState('');
      
  return (
    <>
        <div className='catform'>
            <input type="text" autoFocus value={inputValue}  placeholder='Category' onChange={handleTyping}/>
            {categories.map(({display_name,section})=>
                <>{(section || display_name).includes(inputValue) && <p key={section} onClick={()=>{setCategory(section)}}>{display_name}</p>}</>  
            )}
        </div>

        <style jsx>
            {`
                .catform {
                    display:grid;
                    place-items:center;
                    background:#000;
                    color:#fff;
                    padding-bottom:72px;
                    padding-top:60px;
                    grid-template-rows:max-content max-content;
                    min-height:100vh;
                }
                .catform input {
                    border-radius:12px;
                    height:48px;
                    width:256px;
                    background:rgba(255,255,255,1);
                    border:none;
                    padding-left:6px;
                    outline:none;
                }
            `}
        </style>
    </>
  )
}

export default CatForm