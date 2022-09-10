import { onMount } from 'solid-js';
import { Route, Routes, Router } from '@solidjs/router';

import Chat from './modules/chat/Chat';
import { Routes as ModelRoutes } from './routes/models';

import { Header } from './components/Header/Header';
import { HomePage } from './modules/home/HomePage';

import { getFromStorageAndSetInRedux } from './hooks/useReduxLocalStorage';

const App = () => {

  onMount(() => {
    // We're just calling this function for filling data which saved in localStorage
    // Also the main thing, we should call this function after initializing redux store
    getFromStorageAndSetInRedux();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ModelRoutes.HOME} component={HomePage} />
        <Route path={ModelRoutes.JOIN_TO_THE_CHAT} component={Chat} />
        {/* <Route path="*" element={<h1>not found</h1>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
