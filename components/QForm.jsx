import React, { useState } from 'react'

const QForm = ({q,setQ}) => {
    const [searchValue,setSearchValue]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        setQ(searchValue)
    }

  return (
    <main>
      <form className='qform' onSubmit={handleSubmit}>
          <input type="text" autoFocus placeholder='Bitcoin, James Webb, Elon Musk...' id='search-ipt' value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
          <div>
            
              <span type="submit" onClick={handleSubmit}>Search</span>
          </div>
      </form>
      <style jsx>
        {`
          .qform {
            padding-top:60px;
            background:#000;
            display:grid;
            place-items:center;
            height:100vh;
            grid-template-rows:max-content max-content;
            gap:24px;
          }

          #search-ipt{
            border-radius:12px;
            height:48px;
            width:256px;
            background:rgba(255,255,255,1);
            border:none;
            padding-left:6px;
            outline:none;
          }
          .qform div {
            display:grid;
            width:256px;
            place-items:center;
          }
          .qform div span{
            border:none;
            background:#09d;
            color:#fff;
            width:fit-content;
            border-radius:24px;
            padding:12px 32px;
          }
          
        `}
      </style>
    </main>
  )
}

export default QForm