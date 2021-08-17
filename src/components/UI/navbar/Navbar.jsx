import { Link} from 'react-router-dom';
import MyButton from '../button/MyButton';
import { useContext } from 'react';
import AuthContext from '../../../context';

const Navbar = () => {
  const {isAutch, setIsAuth} = useContext(AuthContext)
  const unlogin = event =>{
      event.preventDefault();
      setIsAuth(false)
  }
    return ( 
        <div className="navbar">
          <MyButton onClick={unlogin}>Выйти</MyButton>
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div> 
     );
}
 
export default Navbar;