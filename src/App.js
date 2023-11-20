import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavComp/NavBar';
import Calcu from './components/Comp1/Calcule';
import Form from './components/Comp2/Form';
import ImageSlider from './components/Comp3/ImageSlider';
import Pagination from './components/Comp4/Pagination';
import Recherch from './components/Comp5/Recherch';
import { SliderData } from './components/Comp3/SliderData';
import Res from './components/Comp6/Res';


function App() {
  return (
    <div className="App">

      <NavBar/>
           

     
     <Routes>

        <Route path='/routing' element={<h1 className='text-center'>Home</h1>} />
        
        <Route path='/Calculatric' element={<Calcu/>} />
        <Route path='/Todo List' element={<Form/>}/>
        <Route path='/Slider' element={<ImageSlider slides={SliderData}/>}/>
        <Route path='/Pagination'  element={<Pagination/>}/>
        <Route path='/Contact' element={<Recherch/>}/> 
        <Route path='/Langue' element={<Res/>}/>
        <Route path="" element={<h1 className='text-center'>404 Page Not Found</h1>} />
     </Routes>






    </div>
  );
}

export default App;
