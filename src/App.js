import Calculator from "@components/calculator";
import Header from "@components/header";

function App() {
  return (
    <div className="App" style={{height:"100vh",width:"100vw", overflow:"hidden"}}>
        <Header />
        <Calculator/>
    </div>
  );
}

export default App;
