import { Inter } from '@next/font/google'
import Router from 'next/router'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    Router.push('/login')
  }, []);

  return (
    <></>
  )
}
