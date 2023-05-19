import "./App.css";
import Books from "./components/Books";
 function App() {
const books = [
  {
    bookName:"Test-1",
    price:500,
    data:2000
  },
  {
    bookName:"Test-2",
    price:600,
    data:1994
  },
  {
    bookName:"Test-3",
    price:800,
    data: 2023
  },
]





  return (
    <div className="App">
      {/* <h1>text</h1> */}
      {/* <h2>{text}</h2> */}
      {/* <Books bookName={books[0].bookName}   price= {books [0].price} data = {books[0].data}/>
      <Books bookName={books[1].bookName}   price= {books [1].price} data = {books[1].data}/>
      <Books bookName={books[2].bookName}   price= {books [2].price} data = {books[2].data}/> */}

{books.map((el)=>{
     return <Books className="name" bookName={el.bookName}   price= {el.price} data = {el.data}/>

})}

    </div>
  );
}
export default App;
