
import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid'


export type FilterValuesType = "all" | "active" | "completed";
export type  todolistsType = {
    id : string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1()
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });
    function removeTodoList(todolistID: string) {
        setTodolists(todolists.filter(el => el.id !== todolistID))
    }


    function removeTask(todolistID: string,id: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== id )});
    }

    function addTask(todolistID: string,title: string) {
        let newTask = {id: v1(), title, isDone: false};
        setTasks({...tasks,[todolistID]: [newTask,...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string,taskId: string, isDone: boolean) {
       setTasks({...tasks,[todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el,isDone} : el)})
    }

    function changeFilter(todolistID: string,value: FilterValuesType) {
       setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value}:el) );
    }


    return (
        <div className="App">

            {todolists.map(el => {
                return (
                    <Todolist title={el.title}
                      removeTodoList={removeTodoList}
                      changeFilter={changeFilter}
                      tasks={tasks[el.id]}
                      removeTask={removeTask}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={el.filter}
                      todolistID={el.id}
            />
                )
            })}

            
        </div>
    );
}

export default App;

/*import './App.css';
import React, {useState} from 'react';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';


function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
      ]
  )

  const [title, setTitle] = useState<string>('');

  

  const addNewMessage = (valueInput : string) => {
    const newMessage = {message : valueInput};
    setMessage([newMessage, ...message]);
    
  }

  const callBackButtonHandler = () => {
    addNewMessage(title);
    setTitle('')
  }
  return (
      <div className="App">
       <div>
          <Input title={title}  setTitle={setTitle} />
          <Button title='+' callback={callBackButtonHandler}/>
       </div>
        {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}
      </div>
  );
}




export default App;*/

/* //1 способ
 <FullInput addNewMessage={addNewMessage}/>

  const addNewMessage = (valueInput : string) => {
    const newMessage = {message : valueInput};
    setMessage([newMessage, ...message])
  }

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

