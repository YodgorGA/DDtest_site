import React from 'react';
import classes from './Introduction.module.css';
import classNames from 'classnames';

const Introduction = () => {

    return (
        <div className={classes.wrapper}>
            <div className={classNames(classes.intro__container,classes._container)}>
                <div className={classes.info_block}>
                    <div className={classes.info_block__title}>
                        <h3>Что это такое ?</h3>
                    </div>
                    <div className={classes.info_block__body}>
                        <p>React.js — это JavaScript-библиотека от Facebook для удобной разработки интерфейсов, то есть внешней части сайтов и приложений, с которой взаимодействует пользователь.</p>
                        <p>Главная фишка React.js — компоненты и состояния.</p>
                        <p>Компонент — это кусочек кода, который отвечает за внешний вид одного из элементов сайта или приложения. Причём такие кусочки-компоненты могут быть вложенными.</p>
                        <p>Состояние — это вся информация об элементе, в том числе о его отображении. Например, состояние объекта «термометр» может описываться свойствами current_temperature, min и max.</p>
                    </div>
                </div>

                <div className={classes.info_block}>
                    <div className={classes.info_block__title}>
                        <h3>Почему React актуален ?</h3>
                    </div>
                    <div className={classes.info_block__body}>
                        <p>У React.js есть три мощных преимущества:</p>
                        <ul>
                            <li>JSX гораздо проще читать и понимать, чем JavaScript, а значит, на поддержку и отладку кода тратится гораздо меньше времени разработчиков (а это зарплаты и скорость новых релизов).</li>
                            <li>Каждый компонент зависит только от своего состояния — а значит, гораздо легче устранять ошибки в коде, если что-то не работает или работает не так, как ожидалось.</li>
                            <li>Ошибки становятся очевидными: компонент, который работает корректно сам по себе, всегда будет работать корректно — если только ему не передать какое-то неправильное состояние.</li>
                        </ul>
                    </div>
                </div>

                <div className={classes.info_block}>
                    <div className={classes.info_block__title}>
                        <h3>Подведем итоги</h3>
                    </div>
                    <div className={classes.info_block__body}>
                        <p>React.js помогает сэкономить время, делает код более понятным и структурированным, даёт возможность переиспользовать большие блоки.</p><p>Всё это помогает значительно снизить стоимость разработки, поддержки, обновления и отладки приложений, а также делать их значительно быстрее.</p><p>К тому же, зная JavaScript и HTML, выучить его достаточно просто — для основ хватит нескольких дней. React.js эффективен только на проектах с большим числом динамических страниц.</p>
                    </div>
                </div>
            </div>
        </div>        
    );
};

export default Introduction;