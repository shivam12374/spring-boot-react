import './App.css';
import PerosnList from './components/PerosnList'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Product from './components/Product'
import AddPerson from './components/AddPerson'
import EditProduct from './components/EditProduct'
import PersonByName from './components/PersonByName'
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/personList" component={PerosnList} />
        <Route exact path="/person/:id" component={Product} />
        <Route exact path="/personByName/:name" component={PersonByName} />
        <Route exact path="/addPerson" component={AddPerson} />
        <Route exact path="/addProduct" component={AddProduct} />
        <Route exact path="/updateProduct/:id" component={EditProduct} />
      </Router>
    </div>
  );
}

export default App;
