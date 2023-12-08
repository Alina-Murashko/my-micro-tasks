import { useState } from "react"

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type AllMoneyPropsType = {
    allMoney: Array<MoneyType> 
    banknote: string
}

export const CounterMoney = (props: AllMoneyPropsType) => {

    const filterMoney = (allMoney:Array<MoneyType> ,banknote: string) => {

        let filterMoney = allMoney

        if (banknote === "ruble") {
            filterMoney =  allMoney.filter((filteredMonue,index) => {
            return filteredMonue.banknote === "ruble"
          })
        } else if (banknote === "dollar") {
            filterMoney = allMoney.filter((filteredMonue,index) => {
            return filteredMonue.banknote === "dollar"
          })
        }

        return filterMoney
      }

      const result = filterMoney(props.allMoney, props.banknote);

    return (
        <div>
            <ul>
            {result.map((item,index) => {
                return (
                    <li key={index} >
                        <span>{item.banknote}</span>
                        <span>{item.nominal}</span>
                        <span>{item.number}</span>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}



