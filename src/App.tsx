import { ToastProvider } from './components/toastManager/provider/ToastProvider';
import ToastManager from './components/toastManager/ToastManager';
import { Home } from './pages/home/Home';

function App() {
  return (
    <ToastProvider>
      <Home />
      <ToastManager />
    </ToastProvider>
  );
}

export default App;
