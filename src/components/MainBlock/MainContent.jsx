import React from 'react';
import classes from './MainContent.module.css';
import classNames from 'classnames';
import MyLink from '../UI/links/MyLink';

const MainContent = () => {
    return (
        <div className={classes.wrapper}>
            
            <div className={classes.arrow}>
                <a href='#' onClick="scroll(0,0);" className={classes.arrowBtn}>↑</a>
            </div>
            <div className={classNames(classes._container,classes.main__container)}>
            <div className={classes.contents}>
                <ol>
                    <li><a href='#1'>Как начать работу с React ?</a></li>
                    <li><a  href='#2'>Hello World</a></li>
                    <li><a  href='#3'>Знакомство с JSX</a></li>
                    <li><a  href='#4'>Рендеринг элемента в DOM</a></li>
                    <li><a  href='#5'>Функциональные и классовые компоненты</a></li>
                    <li><a  href='#6'>Как отрендерить компонент</a></li>
                    <li><a  href='#7'>Состояние компонента</a></li>
                    <li><a  href='#8'>Жизненный цикл компонента</a></li>
                    <li><a  href='#9'>Обработка событий</a></li>
                    <li><a  href='#10'>Условный рендеринг</a></li>
                </ol>    
            </div>
                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='1'>Как начать работу с React ?</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p><MyLink href='https://github.com/facebook/create-react-app'>Create React App</MyLink> — удобная среда для 
                            <b> изучения React</b> и лучший способ начать создание 
                            <b> нового <MyLink href='https://ru.reactjs.org/docs/glossary.html#single-page-application'>одностраничного</MyLink> приложения</b> на React.</p>
                            <p>Инструмент настраивает среду для использования новейших возможностей JavaScript,
                            оптимизирует приложение для продакшена и обеспечивает комфорт во время разработки.
                            Вам понадобятся <MyLink href='https://nodejs.org/ru/'>Node.js не ниже версии 14.0.0 и npm не ниже версии 5.6</MyLink> на вашем компьютере. Для создания проекта выполните команды:</p>
                        </div>
                        <div className={classes.body__right}>
                            <p>npx create-react-app my-app</p>
                            <p><span className={classes.cd}>cd</span> my-app</p>
                            <p><span className={classes.npm}>npm</span> start</p>
                        </div>
                    </div>
                </div>
                
                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='2'>Hello World</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                        <h3>Самый маленький пример на React выглядит так:</h3>
                        <p>На странице появится заголовок «Привет, мир!».</p>
                        </div>
                        <div className={classes.body__right}>
                        <img className='ibg' src="https://i.ibb.co/7XMDwB2/Screenshot-2.jpg" alt="Hello-World" border="0"></img>
                        </div>
                    </div>
                </div>

                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='3'>Знакомство с JSX</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                        <h3>Рассмотрим объявление переменной:</h3>
                        <p>Этот странный тег — ни строка, ни фрагмент HTML.</p>
                        <p>Это JSX — расширение языка JavaScript.<br/> Мы рекомендуем использовать его, когда требуется объяснить React, как должен выглядеть UI. JSX напоминает язык шаблонов, наделённый силой JavaScript.</p>
                        </div>
                        <div className={classes.body__right}>
                        <img src="https://i.ibb.co/W3Fr3tr/Screenshot-3.jpg" alt="Jsx-example" border="0"></img>
                        </div>
                    </div>
                </div>

                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='4'>Рендеринг элемента в DOM</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                        <p>Допустим, в вашем HTML-файле есть блок</p>
                        </div>
                        <div className={classes.body__right}>
                        <img src="https://i.ibb.co/mD9ScCd/Screenshot-4.jpg" alt="Root" border="0"></img>
                        </div>
                    </div>
                    <div className={classes.chapter__body}>
                    <div className={classes.body__left}>
                        <p>Мы назовём его «корневым» узлом DOM, так как React DOM будет управлять его содержимым.</p>
                        <p>Обычно в приложениях, написанных полностью на React, есть только один корневой элемент. При встраивании React в существующее приложение вы можете рендерить во столько независимых корневых элементов, во сколько посчитаете нужным.</p>
                        <p>Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render() с React-элементом и корневым DOM-узлом в качестве аргументов:</p>
                        </div>
                        <div className={classes.body__right}>
                        <img src="https://i.ibb.co/wLxcKwb/Screenshot-5.jpg" alt="Dom.render" border="0"></img>
                        </div>
                    </div>
                </div>
                
                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='5'>Функциональные и классовые компоненты</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>Проще всего объявить React-компонент как функцию:</p>
                        </div>
                        <div className={classes.body__right}>
                            <img src="https://i.ibb.co/YtWNCKg/Screenshot-6.jpg" alt="Components" border="0"></img>
                        </div>
                    </div>

                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.</p>
                            <p>Ещё компоненты можно определять как <MyLink href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes'>классы ES6:</MyLink></p>
                        </div>
                        <div className={classes.body__right}>
                            <img src="https://i.ibb.co/HTGB5zk/Screenshot-7.jpg" alt="Components2" border="0"></img>
                        </div>
                    </div>
                </div>
                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='6'>Как отрендерить компонент</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы» (props).</p>
                        </div>
                        <div className={classes.body__right}>
                        <img src="https://i.ibb.co/MDtD60c/Screenshot-8.jpg" alt="Render" border="0"></img>
                        </div>
                    </div>
                </div>

                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='7'>Состояние компонента</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>У каждого компонента есть внутреннее состояние</p>
                            <p>Для инициализации состояния перед return используют constructor()</p>
                        </div>
                        <div className={classes.body__right}>
                            <img src="https://i.ibb.co/F0J29sL/Screenshot-9.jpg" alt="State" border="0"></img>
                        </div>
                    </div>
                </div>

                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='8'>Жизненный цикл компонента</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>Каждый компонент имеет несколько «методов жизненного цикла». Переопределение такого метода позволяет выполнять код на конкретном этапе этого процесса.<b> Вы можете использовать <MyLink href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'>эту диаграмму жизненного цикла</MyLink> как шпаргалку.</b> Далее на странице<b> полужирным шрифтом</b> выделены самые распространённые методы жизненного цикла.</p>
                            <br/>
                            <h3>Монтирование</h3>
                            <p>При создании экземпляра компонента и его вставке в DOM, следующие методы вызываются в установленном порядке:</p>
                            <ul>
                                <li><b>constructor()</b></li>
                                <li>static getDerivedStateFromProps()</li>
                                <li><b>render()</b></li>
                                <li><b>componentDidMount()</b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='9'>Обработка событий</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>В приведённом справа коде <b>e</b> — это синтетическое событие. React определяет синтетические события в соответствии со <MyLink href='https://www.w3.org/TR/DOM-Level-3-Events/'>спецификацией W3C</MyLink>, поэтому не волнуйтесь о кроссбраузерности. События React работают не совсем как нативные. Изучите руководство о <MyLink href='https://ru.reactjs.org/docs/events.html'>SyntheticEvent</MyLink>, чтобы узнать о них больше.</p>
                        </div>
                        <div className={classes.body__right}>
                            <img src="https://i.ibb.co/9cqxDbM/Screenshot-10.jpg" alt="FunctionalEventlistener" border="0"></img>
                        </div>
                    </div>
                    <br/>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <p>В компоненте, определённом с помощью <MyLink href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes'>ES6-класса</MyLink>, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:</p>
                        </div>
                        <div className={classes.body__right}>
                            <img src="https://i.ibb.co/YQ23qtf/Screenshot-11.jpg" alt="ClassEventlistener" border="0"></img>
                        </div>
                    </div>
                </div>

                <div className={classes.chapter}>
                    <div className={classes.chapter__title}>
                        <h2><a name='10'>Условный рендеринг</a></h2>
                    </div>
                    <div className={classes.chapter__body}>
                        <div className={classes.body__left}>
                            <h3>React позволяет разделить логику на независимые компоненты. Эти компоненты можно показывать или прятать в зависимости от текущего состояния.</h3>
                            <br/>
                            <p>Условный рендеринг в React работает так же, как условные выражения работают в JavaScript. Бывает нужно объяснить React, как состояние влияет на то, какие компоненты требуется скрыть, а какие — отрендерить, и как именно. В таких ситуациях используйте <MyLink href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'>условный оператор</MyLink> JavaScript или выражения подобные <MyLink href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else'>if</MyLink>.</p>
                        </div>
                        <div className={classes.body__right}>
                        <img src="https://i.ibb.co/J2gNbtb/Screenshot-12.jpg" alt="Conditional-rendering" border="0"></img>
                        </div>
                    </div>
                    <br/>
                    <div className={classes.chapter__body}>
                        
                        <div className={classes.body__left}>
                            <p>Можно создать компонент Greeting, который отражает один из этих компонентов в зависимости от того, выполнен ли вход на сайт:</p>
                        </div>
                        <div className={classes.body__right}>
                            <img src="https://i.ibb.co/74sCsRT/Screenshot-13.jpg" alt="Conditional-rendering-2" border="0"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainContent;