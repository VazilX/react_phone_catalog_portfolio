import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './helpers/style/normalize.css';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { MenuContext } from './helpers/utils/menuContext';

export const App: React.FC = () => {
  const { hasMenu } = useContext(MenuContext);

  useEffect(() => {
    const body = document.querySelector('body');

    if (hasMenu) {
      body?.style.setProperty('position', 'fixed');
    } else {
      body?.style.setProperty('position', 'static');
    }
  }, [hasMenu]);

  return (
    <div className="app">
      <Header />
      <ScrollToTop />

      <div className="app__outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
