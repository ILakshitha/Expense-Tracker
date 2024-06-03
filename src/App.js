import Header from "./components/Header";
import './App.css';
import Balance from "./components/Balance";
import Income_Expences from "./components/Income_Expences";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="container">
      <Balance/>
      <Income_Expences/>
      <TransactionList/>
     </div>
    </div>
  );
}

export default App;
