import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999 },
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 15600 },
]

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="d-flex">
          <Card />

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"></img>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-collumn">
                <span>Цена:</span>
                <b> 12 999 руб. </b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
          <Card />
          <Card />
        </div>
        ....
      </div>
    </div >
  );
}

export default App;
