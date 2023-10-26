import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
function Navbar() {
      const user =true;
    return (
        <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
            <h1 className='text-lg font-extrabold'><Link to="/">BlogKing</Link></h1>
             <div className="flex justify-center items-center space-x-0">
                <p><BsSearch/></p>
                <input type="text" className="outline-none px-3 " placeholder='Search a post'/>
             </div>
             <div className="flex items-center justify-center space-x-4 md:space-x-4">
               { user ? <h3><Link to="/write">write</Link></h3>: <h3><Link to="/Login">Login</Link></h3>}
               {user ? <h3><Link to="/profile">Profile</Link></h3> : <h3><Link to="/Register">Register</Link></h3>}
             </div>
        </div>
    )
}

export default Navbar
