import React from 'react';
import Nav from './Nav';
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link';

type data = {
    userId:string
    id: string
    title: string
    body: string
 }

export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const swapis: data[] = await res.json()

    return{
        props:{
            swapis
        }
    }
}

const contact = ({swapis}:InferGetStaticPropsType<typeof getStaticProps>) => {
    
    return (
        <div className='bg-primary vh-100'>
            <Nav/>
            {swapis.slice(0,5).map((item)=>(
                <div className='d-flex text-white' key={item.id}>
                    <h6 style={{marginRight:"10px"}}>{item.id}</h6>
                    <Link href={`/${item.id}`}>{item.title}</Link>
                </div>
            ))}
            <Link href={`/About`}>go to About</Link>
        </div>
    );
};

export default contact;