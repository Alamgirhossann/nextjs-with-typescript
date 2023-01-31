import { useRouter } from 'next/router';
import React from 'react';
import Nav from './Nav';
import { InferGetStaticPropsType } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
// import { ParsedUrlQuery } from 'querystring'

type data = {
  userId:string
  id: string
  title: string
  body: string
}

export const getStaticPaths = async()=>{
  const res =await fetch('https://jsonplaceholder.typicode.com/posts')
  const swapis:data[] = await res.json()
 const paths = swapis.map((curElem)=>{
    console.log(curElem);
    return{
      params:{
        dynamicRoute: curElem.id.toString()
      }
    }
  })
  return{
    paths,
    fallback:false
  }
};

export const getStaticProps: GetStaticProps = async(context)=>{
  const id = context.dynamicRoute;
  const res =await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return{
    props:{
      data
    }
  }
};





const dynamicRoute = () => {
  
    return (
        <div className='bg-primary vh-100'>
        <Nav/>
        <div className='d-flex text-white'>
                    
                </div>
        </div>
    );
};

export default dynamicRoute;