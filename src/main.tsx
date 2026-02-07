import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router' // Added Route
import { Home } from './pages/Home.tsx'

const paths = {
  '/': <Home />
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {Object.entries(paths).map(([path, element]) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  </BrowserRouter>,
)
