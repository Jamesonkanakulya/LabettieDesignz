import React from 'react';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Inquiry from './pages/Inquiry';
import Subgallery from './pages/Subgallery';
import{Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Errorpage from './pages/Errorpage';
import Blog from './pages/Blog';
import Mypost from './components/Mypost';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path= "/" component={Home}/>
       <Route exact path= "/gallery" component={Gallery}/>
       <Route exact path= "/gallery/:slug" component={SingleProduct}/>
        <Route exact path= "/blog/" component = {Blog}/>
        <Route exact path= "/blog/:blogpost" component = {Mypost}/>
        <Route exact path= "/about" component={Inquiry}/>
        <Route exact path= "/contact" component={Contact}/>
        <Route exact path= "/gallery/:subgallery" component={Subgallery}/>
        <Route  component={Errorpage}/>
      </Switch>
      <Footer/>
     

      
      
    
    </div>
  );
}

export default App;
