import Header from "./components/Header";
import './App.css';
import Balance from "./components/Balance";
import IncomeExpences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";
import AddTransactions from "./components/AddTransactions";

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpences/>
      <TransactionList/>
      <AddTransactions/>
     </div>
    </div>
  );
}

export default App;
