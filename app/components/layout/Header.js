import Link from 'next/link';

export default function Header(){
return (

<header className="flex items-center justify-between">
    
    <nav className="flex items-center gap-8 text-gray-800 font-semibold">
    <Link className="text-blue-600 font-semibold text-2xl" href={""}>The Shore Restaurant </Link>
      <Link href ={'app/page.tsx'}>Home</Link>
      <Link href ={''}>Our Menu</Link>
      <Link href ={''}>About</Link>
      <Link href ={''}>Contact us</Link>
      <Link href ={'/dashboard'}>Dashboard</Link>
      
    </nav>
    <nav className="flex items-center gap-8 text-gray-800 font-semibold">
    <Link href ={'/login'} className="bg-primary text-white px-4 py-2 rounded-full">Login</Link>
      <Link href ={'/register'}>Register</Link>
    </nav>
      
      


      </header>  
);

}