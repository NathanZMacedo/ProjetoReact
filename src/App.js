import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router';


import { Provider } from 'react-redux';
import store from '../src/Redux/store'

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
