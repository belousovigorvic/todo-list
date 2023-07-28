import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import PropTypes from 'prop-types';
import 'animate.css'

const Favorites = ({handlerClick, animatedClick }) => {
  
  return (
    <div onClick={handlerClick} className="absolute bottom-4 right-4 text-4xl cursor-pointer  text-yellow-400">
      {animatedClick ? <AiFillStar className="animate__animated animate__fadeIn" /> : <AiOutlineStar className="animate__animated animate__fadeIn text-gray-500" />}
    </div>
  )
}

  Favorites.propTypes = {
    handlerClick: PropTypes.func.isRequired,
    animatedClick: PropTypes.bool.isRequired
  }

export default Favorites