

import { BrowserRouter , Route , Routes} from 'react-router-dom';

 import Login from './pages/Login';
import Getstarted from './pages/Getstarted';
import Form from './businessRegistration/Form';

function App() {
  return (
<BrowserRouter>
   
     <Routes>
     <Route  path="/" element={<Login/>} />
     <Route  path="/getstarted" element={<Getstarted/>} />
     <Route  path="/business-form" element={<Form/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
