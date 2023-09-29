import React, {useState, useEffect} from "react";
import './Card.css';


interface iInputProps {
    text: string;
    subtext?: string;
}
export default function Card(props: iInputProps){
    const [isPressed, setIsPressed] = useState(false);
    useEffect(() =>{
        let button = document.querySelector('.card-component');
        button?.addEventListener('click',function(){
            button?.classList.add('card-flip-animation');
            setTimeout(function(){
                setIsPressed(false);
                button?.classList.remove('card-flip-animation');
            }, 1000)
        });
    }, [isPressed])
    return (
        < button
        className="card-component"
        >
            <p
            className="subtext-compponent"
            placeholder={props.subtext}
            onClick={() => {
                setIsPressed(true)
            }}
            >
            {props.subtext ? props.subtext : 'Переведите слово:'}
            </p>
            <p
            className="card-text-component"
            placeholder={props.text}
            >
            {props.text}
            </p>
        </button>
    )
}