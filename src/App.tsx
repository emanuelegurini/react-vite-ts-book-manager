import { ToastManager } from "@/components";
import { BookList } from "./components/BookList";
import { ToastProvider } from "@/components/ToastContext";

function App() {
  return (
    <ToastProvider>
      <BookList />
      <ToastManager />
    </ToastProvider>
  );
}

export default App;
