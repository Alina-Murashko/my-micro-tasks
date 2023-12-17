
import './App.css';
import React, {useState} from 'react';
import { FullInput } from './components/FullInput';


function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
      ]
  )

  const addNewMessage = (valueInput : string) => {
    const newMessage = {message : valueInput};
    setMessage([newMessage, ...message])
  }

  return (
      <div className="App">
        <FullInput addNewMessage={addNewMessage}/>
        {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}
      </div>
  );
}




export default App;

/*


*/

/*

// 1 неделя

 const [money, setMoney] = useState([
    {banknote: "dollar", nominal: 100, number: "a123456789"},
    {banknote: "dollar", nominal: 50, number: "b123456789"},
    {banknote: "ruble", nominal: 100, number: "c123456789"},
    {banknote: "dollar", nominal: 100, number: "d123456789"},
    {banknote: "dollar", nominal: 50, number: "e123456789"},
    {banknote: "ruble", nominal: 100, number: "f123456789"},
    {banknote: "dollar", nominal: 50, number: "j123456789"},
    {banknote: "ruble", nominal: 50, number: "h123456789"}
])

const [nameButtonFilter, setNameButtonFilter] = useState("All")


 <h3>Current curency {nameButtonFilter}</h3>
          <CounterMoney allMoney={money} banknote={nameButtonFilter} />
          <Button title='dollar' callback={ setNameButtonFilter}/>
          <Button title='ruble' callback={setNameButtonFilter}/>
          <Button title='all' callback={ setNameButtonFilter}/>


*/ 


/* 

// 1 неделя
const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )

    const topCars = [
      {manufacturer: 'BMW', model: 'X5'},
      {manufacturer: 'Mersedes', model: 'MLS'},
      {manufacturer: 'Audi', model: 'Q7'}
  ]

   /* const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
      console.log("hello, my name Alina")
    }

    const myTwoSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
      console.log("hello, my name Valera")
    }

    const ButtonOneFoo = (name: string, age: number) => {
      console.log(`hello, my name ${name}, age ${age}`)
    }

    const ButtonTwoFoo = (name: string) => {
      console.log(`bye, ${name}`) 
    }
  */

