import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';


function Header() {
    return (
        <div className='header'>
            <img 
            className='header__logo'
            
            src='data:image/png;base64,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' />
            
            <div
            className='header__search'>
             <input className='header__searchInput' 
             type="text" />
             <SearchIcon className='header__searchIcon' />
             {/* logo */}
            </div>

            <div className='header__nav'>
                <div className='header__option'>                  
                    <span className='header__optionLineOne'>
                        Hello guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>
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
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                    <span className='header__optionLineTwo header__basketCount'>0</span>

                </div>
            </div>
            
        </div>
    )
}

export default Header
