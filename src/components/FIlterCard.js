import { Link, useParams } from "react-router-dom";
import { database } from "../Database/data";
import GameCard from "./GameCard";
import Navbar from "./Navbar";

const FIlterCard = () => {
  const { name } = useParams();
//   console.log(name);

  const fileterView = database.filter(
    (item) => item.type.toLocaleLowerCase() === name.toLocaleLowerCase()
  );
//   console.log(fileterView);

  const searrchByName = database.filter((item) =>
    item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  const searchByTag = database.filter((item)=>{
    return item.name.toLocaleLowerCase().split("").includes(name.charAt(0))
  })
//   console.log(searchByTag,'spl');
  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid">
          <div className="container py-2 py-md-5">
            <div className="row">
              {fileterView.length > 0 ? (
                <>
                  {fileterView.map((item, index) => {
                    return <GameCard key={index} tools={item} />;
                  })}
                </>
              ) : (
                <>
                  {searrchByName.length > 0 ? (
                    <>
                      {searrchByName.map((item, index) => {
                        return <GameCard key={index} tools={item} />;
                      })}

                      <h5 className="tagTitle">You may also like </h5>
                      <div className="d-flex flex-wrap">
                        {
                            searchByTag.map((item,index)=>{
                                return (
                                    <GameCard key={index} tools={item} />
                                )
                            })
                        }
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="notFound">
                        <h2>Game Not Found</h2>
                        <p>
                            <Link to='/'>Back To HomePage</Link>
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FIlterCard;
