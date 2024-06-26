import Head from 'next/head'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/sidebar';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Omnify Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`w-full min-h-lvh flex bg-red-500 box-border ${poppins.className}`}>
        <Sidebar />
      </div>
    </>
  )
}
