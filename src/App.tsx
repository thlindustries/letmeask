import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

import GlobalStyle from 'styles/global';
import AppProvider from 'hooks';

export const App = (): any => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
    </>
  );
};
