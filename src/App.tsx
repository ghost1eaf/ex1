import {Route, Routes} from 'react-router-dom'
import {ProductsPage} from './Pages/ProductsPage'
import { AboutPage } from './Pages/AboutPage';
import { Navigation } from './Components/Navigation';

function App(){
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={ <ProductsPage /> } />
      <Route path="/about" element={ <AboutPage /> } />
    </Routes>
    </>
  )

}

export default App;
