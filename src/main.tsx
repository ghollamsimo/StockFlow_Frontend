import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Toaster} from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <>
    <App />
      <Toaster
          position="top-center"
          containerClassName="custom-toaster-container"
          containerStyle={{ zIndex: 99999 }}
          toastOptions={{
              style: {
                  zIndex: 99999,
              },
          }}
          reverseOrder={false}
      />
  </>,
)
