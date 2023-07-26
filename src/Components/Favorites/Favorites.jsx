import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import 'animate.css'

const Favorites = ({ propActiveStar, handlerClick }) => {
  
  return (
    <div onClick={handlerClick} className="absolute bottom-4 right-4 text-4xl cursor-pointer  text-yellow-400">
      {propActiveStar ? <AiFillStar className="animate__animated animate__bounce" /> : <AiOutlineStar className="animate__animated animate__fadeIn" />}
    </div>
  )
}

export default Favorites