import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Dynamic mobile viewport height calculation
function setActualVh() {
  const h = window.visualViewport?.height ?? window.innerHeight;
  document.documentElement.style.setProperty('--actual-vh', `${h * 0.01}px`);
}
setActualVh();
if (typeof window !== 'undefined') {
  (window.visualViewport ?? window).addEventListener('resize', setActualVh);
  window.addEventListener('orientationchange', setActualVh);
}

createRoot(document.getElementById('root')!).render(<App />);
