type ButtonPropType = {
    title : string
    callback: (currencyName: string) => void
}


export const Button = (props: ButtonPropType) => {

    const onClickHundler = () => {
       props.callback(props.title)
      }

    return (
        <button  onClick={onClickHundler}>{props.title}</button>
    )
}