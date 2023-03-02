import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        {/* <Route path="/product/:productId" element={<ProductDetail/>}/> */}
        <Route >404 Not Found</Route>
      </Routes>
      
    </div>
  );
}

export default App;
