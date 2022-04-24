import { useState } from 'react'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import useList from '../hooks/useList'
import useSubscription from '../hooks/useSubscription'

const search = () => {
  const { user } = useAuth()
  const showModal = useRecoilValue(modalState)
  const movie = useRecoilValue(movieState)
  const list = useList(user?.uid)
  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
    >
      <Head>
        <title>
          {movie?.title || movie?.original_name || 'Home'} - Netflix
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
        {/* <Banner netflixOriginals={netflixOriginals} /> */}

        <section className="md:space-y-24">
          {/* My List */}
          {list.length > 0 && <Row title="My List" movies={list} />}

          <Row title="search : " movies={[]} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default search
