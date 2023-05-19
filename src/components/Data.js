function Data(p){
    console.log(p);
// const month = props.data.toLocaleDateString("tr",{month:"long"})
// const day = props.data.toLocaleDateString("tr",{day:"2-digit"})


const year = 2021
const ago = year - p.data
const result = ago === 0 ? 2023 : ago + "years ago"

return (
    <div>
        <p>{result}</p>
    </div>
      
    )
}
export default Data
