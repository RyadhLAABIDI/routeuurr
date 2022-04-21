import { Link } from "react-router-dom";

function Movie({ el }) {
  return (
    <div className="Movie">
      <Link to={`/user/${el.id} `}>
        
        <img src={el.img} />

          <h3> {el.name}</h3>

          <h5> {el.Years}</h5>
          
        
    </Link>
    </div>
  );
}

export default Movie;
