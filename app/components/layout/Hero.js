import Link from 'next/link';
import Image from 'next/image';


export default function Hero(){
    return(

        <section className="grid grid-cols-2 mt-8">
        <div>
      <h1 className="text-4xl font-semibold leading-normal">Indulge in the taste of the sea, where every dish is a tribute to the ocean&apos;s bounty, with   <br/> <span className="text-primary">our Carlingford Oysters</span> taking center stage.</h1>
      <br></br>
      <p className="my-4 text-gray-800">
       The Shore Restaurant is located in Carlingford Lough, the home of the world renowned Carlingford Oyster. The unique sweet taste and high meat content of the Carlingford Oyster is one of nature&apos;s real treasures. Dive into freshness at The Shore Restaurant, where every bite brings the essence of the sea to your plate.
      </p>
      <div className="flex gap-4">
       <button className="bg-primary uppercase flex gap-2 text-white px-8 py-2 rounded-full">Book a table  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg> </button> 
      
       <button className="flex gap-2 py-2 font-semibold text-black-800">Order for collection <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg></button><br/>
      </div>
      </div>
      <div className= "relative">
      <Image src={'/menu_img/newoyster.png'} layout={'fill'} objectFit={'contain'} alt={'oyster'}/>
      


      
      </div>
      </section>     






    );
}