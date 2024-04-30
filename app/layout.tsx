import '@/app/ui/global.css';
import { Roboto } from 'next/font/google';
import Header from '@/app/components/layout/Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700']})

export const metadata = {
  title: 'The Shore Restaurant',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={roboto.className}>
      <main className="max-w-4xl mx-auto">
      <Header />
        {children}
        <footer className="border-t p-8 text-ceneter text-gray-500 mt-16">
        &copy; 2024 All rights reserved 
      </footer>
      </main>

      </body>


    </html>
  )
}






// import { inter } from '@/app/ui/fonts';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
     
//      <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }





