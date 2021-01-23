import { Suspense } from 'react'
import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Go from '@/components/dom/go'

const Guitar = dynamic(() => import('@/components/canvas/Guitar'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Sphere' })
  return (
    <>
      <Guitar r3f />
    </>
  )
}

export default Page
