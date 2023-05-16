import { Fragment } from 'react';
import mealsImage from '../../Assets/meals.jpg';
import HeaderCardButton from './headerCartButton';
import classes from './header.module.css';


const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <h1>Foodies</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='images'></img>
        </div>
        <div>

        </div>
    </Fragment>
}

export default Header;