/* eslint-disable jsx-a11y/anchor-is-valid */

import { database } from "../Database/data";
import GameCard from "./GameCard";

const Card = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="container py-2 py-md-5">
          <div className="row">
            {
                database.map((item,index)=>{
                    return (
                        <GameCard key={index} tools={item}/>
                    )
                })
            }
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
