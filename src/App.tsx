import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from 'styles/global';
import AppProvider from 'hooks';

export const App = (): any => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </>
  );
};
