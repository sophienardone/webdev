// "use client";
import styles from '@/app/ui/home.module.css';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import React from 'react';
// import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import SectionHeaders from "@/app/components/layout/SectionHeaders";








export default function Page({  }) {



  // React.useEffect(() => {
  //   return () => {
  //     connection.end();
  //   };
  // }, []);
  return (

    <>
   
    {/* <Header /> */}

    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16">
     <SectionHeaders subHeader={'Our Story'}  mainHeader={'About us'}/>
     
     <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
     <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio incidunt debitis sed? Unde qui quis fuga, asperiores deleniti officiis eius officia blanditiis suscipit, beatae quam magni aspernatur! Pariatur, ea? 
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero asperiores assumenda est nam dolores vitae unde? Dicta deleniti veniam nulla soluta rem, enim nostrum nisi incidunt illo possimus eius!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae tempore quod et adipisci est dolorum fugiat consectetur iste rem? Quibusdam facilis suscipit esse accusamus sint tempore corrupti reiciendis vero?
    </p>
     </div>
    
     
    </section>
   

    

<br/>








</>
      
        
   
    
  );
}




