import React, { useState } from 'react';
import MyButton from '../UI/buttons/MyButton.jsx';
import MyLink from '../UI/links/MyLink.jsx';
import classes from './Header.module.css';
import classNames from 'classnames';
import Introduction from '../IntroductionBlock/Introduction.jsx';

const Header = () => {
    const [count, setCount] = useState('false');
    return (
        <div className={classes.wrapper}>
            <div className={classNames(classes.header__container,classes._container)}>
                <div className={classes.header__title}>
                    <h1>React</h1>
                    <h2>JavaScript-библиотека для создания пользовательских интерфейсов</h2>
                    <h2>{count}</h2>
                </div>
                <div className={classes.header__buttons}>
                    <MyButton onClick={()=>setCount('true')}children={'Начать изучение'}/>
                    <MyLink  href='https://ru.reactjs.org/' children={'Официальный сайт →'}/>
                </div>
            </div>
        </div>   
    );
};

export default Header;