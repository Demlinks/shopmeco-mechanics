

import { BrowserRouter , Route , Routes} from 'react-router-dom';

 import Login from './pages/Login';
import Getstarted from './pages/Getstarted';
import Form from './businessRegistration/Form';
import RootLayout from './pages/RootLayout';

import Profile from './pages/Profile';
function App() {
  return (
<BrowserRouter>
   
     <Routes>
     <Route  path="/" element={<RootLayout/>} >
     <Route  index element={<Login/>} />
     <Route  path="/getstarted" element={<Getstarted/>} />
     <Route  path="/business-form" element={<Form/>} />
 

</Route>

<Route  path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
