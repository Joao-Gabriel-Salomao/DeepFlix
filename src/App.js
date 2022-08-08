import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import Movierow from "./components/Movierow";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total de filmes 
      let list  = await  Tmdb.getHomeList(); 
      setMovieList(list);
    }

    loadAll();

  }, []);

  return(
    <div className="page"> b
      <selection className="lists">
        {movieList.map((item, key) => (
          <Movierow key={key} title = {item.title} items={item.items}/> 
        ))}
      </selection>
    </div>
  );
  }