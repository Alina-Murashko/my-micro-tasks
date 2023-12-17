type ButtonPropType = {
    title : string
    callback: () => void
}


export const Button = (props: ButtonPropType) => {

    const onClickHundler = () => {
       props.callback()
      }

    return (
        <button  onClick={onClickHundler}>{props.title}</button>
    )
}