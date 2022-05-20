
import React from 'react';
import Customer from './components/Customer/Customer';
import Navbar from './components/navbar/Navbar';
import './styles/App.scss';
import { Povider,Provider} from "react-redux";
import store from './store';

function App() {
    return (
<Provider store={store}>
<div>
          <Navbar />

      <div className='container'>
          <div className='py-3'>
          <Customer />
          </div>

      </div>
        </div>
</Provider>
    );
}

export default App;