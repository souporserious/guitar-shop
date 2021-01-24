import { Suspense } from 'react'
import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('@/components/canvas/Guitar'), {
  ssr: false,
})

const Guitar = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight />
      <Model />
    </Suspense>
  )
}
const Page = () => {
  useStore.setState({ title: 'Sphere' })
  return (
    <>
      <Guitar r3f />
    </>
  )
}

export default Page
