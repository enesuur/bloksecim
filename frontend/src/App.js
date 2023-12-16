import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
}
  from 'react-router-dom';
import { WalletContextProvider } from './context/WalletContext';
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home';
import Votes from './pages/Votes';
import GetPin from './pages/GetPin';
import About from './pages/About';
import Tokenomics from './pages/Tokenomics';
import Profile from './pages/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/getpin' element={<GetPin />} />
      <Route path='/votes' element={<Votes />} />
      <Route path='/tokenomics' element={<Tokenomics />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/about' element={<About />} />
    </Route>
  )
);

export default function App() {
  return (
    <WalletContextProvider>
      <RouterProvider router={router}/>
    </WalletContextProvider>
  );
};