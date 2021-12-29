import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{basket,user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img 
            className='header__logo'
            
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' />
            </Link>
            <div
            className='header__search'>
             <input className='header__searchInput' 
             type="text" />
             <SearchIcon className='header__searchIcon' />
             {/* logo */}
            </div>

            <div className='header__nav'>
                <Link to={!user && '/amazon-clone/login'}>
                <div onClick={handleAuthentication} className='header__option'>                  
                    <span className='header__optionLineOne'>
                        Hello guest
                    </span>
                    <span className='header__optionLineTwo'>
                        {user ?'Sign Out':'Sign In'}
                    </span>
                    </div>
                    </Link>
                <div className='header__option'>                  
                <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                <div className='header__option'>                  
                <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <Link to="amazon-clone/checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}</span>

                </div>
                </Link>
            </div>
            
        </div>
    )
}

export default Header
