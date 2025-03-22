'use client';

import { Layout } from '@/components/layout/layout';
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter()

  // useEffect(() => {
  //   router.push('/')
  // }, [])

  return <Layout>{children}</Layout>;
}
