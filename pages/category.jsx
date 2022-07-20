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
  
  const API=`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=12${category!==null ? `&category=`+category:''}&apiKey=61403e63fb404f399b00c46d03231b62`

  return (
    <>
      <Head>
        <title>{category===null ? 'Category' : category} - dr.news</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favi.PNG" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
        {category===null 
          ? <CatForm setCategory={setCategory} />
          : <NewsSection API={API} setPage={setPage} page={page}/>
      }
      
      <Footer selected={'cat'}/>
    </>
  )
}
