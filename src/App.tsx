import { ToastManager } from '@/components';
import { ToastProvider } from '@/components/ToastContext';
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
