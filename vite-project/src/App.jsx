import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
])

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
