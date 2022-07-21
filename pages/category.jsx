import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';
import CatForm from '../components/CatForm';

export default function Home() {
  
  const [category,setCategory]=useState(null)
  const [page,setPage]=useState(1);

  const KEY = 'djQ8gPEHON5Pnk7jTNhTelR8M8Bg5Pmd'
  const API=`https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?limit=12&offset=${page}&api-key=${KEY}`;
  

  return (
    <div className='angel'>
      <Head>
        <title>{category===null ? 'Category' : category} - dr.news</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        
      </Head>
        {category===null 
          ? <CatForm setCategory={setCategory} />
          : <NewsSection API={API} setPage={setPage} page={page}/>
      }
      
      <Footer selected={'cat'}/>

      
    </div>
  )
}
