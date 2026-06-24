import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routers/routerMain.jsx'
import { RouterProvider } from 'react-router'
import store from './store.js'
import { Provider } from 'react-redux'
import { CommentProvider } from './CommentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CommentProvider>
        <RouterProvider router={router} />
      </CommentProvider>
    </Provider>
  </StrictMode>,
)
