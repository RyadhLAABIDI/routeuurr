import { useParams} from 'react-router-dom'
import Movies from '../Component/MovieList'
function User() {

const {ID}=useParams()
console.log(ID);
const user = Movies.find(el=>  el.id=== Number(ID)  )
console.log(user)

  return (
    <div className="user">
      <h1> this is the Movie {user.name} </h1>
      <img src={user.img} />
    </div>
  );
}
export default User;