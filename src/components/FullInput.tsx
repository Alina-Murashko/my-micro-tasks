import React, { ChangeEvent, useState } from "react";

type FullInputPropsType = {
    addNewMessage: (valueInput : string) => void
}


export const FullInput = (props: FullInputPropsType) => {
const [title, setTitle]= useState('');

const OnChangeInputHundler = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.currentTarget.value;
    setTitle(newTitle);
}

const OnChangeButtonHundler = () => {
    props.addNewMessage(title);
    setTitle('');
}

    return (
        <div>
          <input value={title} onChange={OnChangeInputHundler}/>
          <button onClick={OnChangeButtonHundler}>+</button>
        </div>
    )
}