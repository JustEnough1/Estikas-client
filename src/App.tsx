import React, {useState} from "react";

import "./App.css";
import './FlexBox.css'
import './Components/Card.css';
import Card from "./Components/Card";
import Button from "./Components/Button";
import TextProgression from "./Components/TextProgression";


function App() {
    let words: string[] = [
        '',
        'Tere',
        'Привет',
        'Head',
        'Хорошо',
        'Oluline',
        'Важно',
        'Turg',
        'Рынок',
        'Pliats',
        'Карандаш',
        'Ruum',
        'Помещение',
        'Hoia',
        'Держать',
        'Tutvuma',
        'Знакомиться'
    ];
    let maxCount = 6;
    let [count, setCount] = useState(1);
    let [isPushed, setIsPushed] = useState(false);

    let button = document.querySelector('.btn');

    
    let HandleClick = () => {
        if(count < maxCount){
            setTimeout(() => {
                return setCount(count + 1);
            }, 500)
        } else {
            setTimeout(() => {
                return setCount(1);
            }, 500)
        }
  
    }

    let HandleClicSkip = () => {
        if(count < maxCount){
            setTimeout(() => {
                return setCount(count + 2);
            }, 500)
        } else {
            setTimeout(() => {
                return setCount(1);
            }, 500)
        }
    }

    return <div>
        <div className="page-center">
        <div className="container">
        <div>
        <div className="item-left">
            Вернуться
        </div>
        <div style={{height: '62px'}}></div>
        <div className="item">
            <TextProgression progression={count.toString()} progression_goal={maxCount.toString()} progression_separator='/' text_theme='Эстик'/>
        </div>
        <div className="item">
            <Card text={words[count]} onClick={() => {
                HandleClick()
            }}/>
            <div className="card-separator-down"></div>
            <div className="item">
            <Button btnColor="yellow" text="Вперед" onClick={() => {
                setIsPushed(true);
                button?.addEventListener('click', () => {
                    let card = document.querySelector('.card-component');
                    if(isPushed == true){
                        card?.classList.add('card-flip-animation')
                        setTimeout(() => {
                            setIsPushed(false);
                            card?.classList.remove('card-flip-animation');
                            setCount(count + 2);
                        }, 900);
                    }
                });
            }} style={{width: '379px', display: 'block'}}/>
            <div className="separator-buttons"></div>
            <Button btnColor="black" text="Назад" onClick={() => {}} style={{width: '379px'}}/></div>
        </div>
        </div>
        </div>
        </div>
    </div>;
}
export default App;
