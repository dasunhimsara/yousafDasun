import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600">
        

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/update' element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
