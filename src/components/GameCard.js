/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

const GameCard = ({tools}) => {
    const {name,image,id}=tools;
    
  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 gameCard ">
      <div className="card mx-1 my-2 gameCardBody">
        <img
          className="card-img-top gameCardImage"
          alt=""
          src={image}
          style={{height:"200px"}}
        />
        <div className="card-body">
          <h5 className="card-title ttcap ">{name}</h5>

          <Link to={`/games/${id}`} className="btn btn-primary">
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
