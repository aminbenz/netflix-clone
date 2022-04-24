import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import { Movie } from '../typings'

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      // className={`movie-card`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
      {/* <video src={trailer} autoPlay={true} loop /> */}
      {/* <div className="itemInfo">
        <div className="icons"> */}
      {/* <PlayArrow className="icon" /> */}
      {/* <Add className="icon" /> */}
      {/* <ThumbUpAltOutlined className="icon" /> */}
      {/* <ThumbDownOutlined className="icon" /> */}
      {/* </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          hic rem eveniet error possimus, neque ex doloribus.
        </div>
        <div className="genre">Action</div>
      </div> */}
    </div>
  )
}

export default Thumbnail
