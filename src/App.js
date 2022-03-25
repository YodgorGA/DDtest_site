import './styles/App.css';
import MyButton from './components/UI/buttons/MyButton.jsx';
import MyLink from './components/UI/links/MyLink.jsx';
import Introduction from './components/IntroductionBlock/Introduction.jsx';
import MainContent from './components/MainBlock/MainContent.jsx';
import { useState } from 'react';


function App() {
  
  const [btnState, setBtnState] = useState('false');
  
  if( btnState === 'true')
  {
    return(
      <div className="App">
          <div className='wrapper'>
              <section className='header__container _container'>
                  <div className='header__title'>
                      <h1>React</h1>
                      <h2>JavaScript-библиотека для создания пользовательских интерфейсов</h2>
                  </div>
                  <div className='header__buttons'>
                      <MyButton onClick={()=>setBtnState('false')}children={'Вернуться ←'}/>
                      <MyLink  href='https://ru.reactjs.org/' children={'Официальный сайт →'}/>
                  </div>
              </section>
              <div className='main '>
                <MainContent/>
              </div>
          </div>  
      </div>
    )
  }

  else if (btnState === 'false'){
    return (
      <div className="App">
          <div className='wrapper'>
              <section className='header__container _container'>
                  <div className='header__title'>
                      <h1>React</h1>
                      <h2>JavaScript-библиотека для создания пользовательских интерфейсов</h2>
                  </div>
                  <div className='header__buttons'>
                      <MyButton onClick={()=>setBtnState('true')}children={'Начать изучение'}/>
                      <MyLink  href='https://ru.reactjs.org/' children={'Официальный сайт →'}/>
                  </div>
              </section>
              <div className='intro'>
                  <Introduction/>
              </div>
          </div>  
      </div>
    );
  }

  

}

export default App;
