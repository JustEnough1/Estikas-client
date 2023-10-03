import React from "react";

interface iTextProps{
    text_theme?: string;
    text_style?: React.CSSProperties;
    progression: string;
    progression_goal: string;
    progression_separator: string;
    progression_style?: React.CSSProperties;
}

export default function TextProgression(props: iTextProps){
    return (
        <div>
            <div style={props.text_style ? props.text_style : {fontSize: '31px'}} placeholder={props.text_theme}>Тема: {props.text_theme ? props.text_theme : "Свободная"}</div>
            <div style={{display: 'flex', placeItems: 'center', justifyContent: 'center'}}>
                <div style={props.progression_style ? props.progression_style : {flex: 'flex', padding: '10px',fontSize: '20px'}} placeholder={props.progression}>{props.progression}</div>
                <div style={props.progression_style ? props.progression_style : {flex: 'flex', padding: '10px',fontSize: '20px'}} placeholder={props.progression_separator}>{props.progression_separator}</div>
                <div style={props.progression_style ? props.progression_style : {flex: 'flex', padding: '10px',fontSize: '20px'}} placeholder={props.progression_goal}>{props.progression_goal}</div>
            </div>
            <h2 placeholder={props.progression}> </h2>
        </div>
        )
}