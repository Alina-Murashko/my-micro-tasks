export const Education_Button = ()=> {

    const onClickHundler = (name:string) => {
        console.log(`hello, my name ${name}`)
      }
  
      const fool = () => {
          console.log(100200)
      }
  
      const foolTwo = (number: number) => {
          console.log(number)
      }
  
    return (
        <div>
            <button onClick={() => {console.log("hello!")}}>MyYouTubeChanel-1</button>
            <button onClick={() => {onClickHundler("Alina")}}>MyYouTubeChanel-2</button>
            <button onClick={() => {onClickHundler("Vova")}}>MyYouTubeChanel-3</button>
            <button onClick={() => onClickHundler("some info")}>MyYouTubeChanel-4</button>
            <button onClick={fool}>1</button>
            <button onClick={() => {foolTwo(100200)}}>2</button>
        </div>
    ) 
}