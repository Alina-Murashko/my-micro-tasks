import React from "react"

type StydentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StydentType>
    topCars:  Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}



export const NewComponent = (props: NewComponentType) => {

    return (<div>
         <ul>
           {props.students.map((item,index) => {
            debugger
            return (
                <li key={item.id}>
                    {item.name} : {item.age}
                </li>
            )
           }) }
                
        </ul>
        <table>
            <th>manufacturer</th>
            <th>model</th>
            {props.topCars.map((item,index) => {
                return (
                    <tr>
                        <td>{item.manufacturer}</td>
                        <td>{item.model}</td>
                    </tr>
                )
            })}
        </table>
    </div> 
    )
}