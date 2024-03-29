import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Init } from './pages'

const router = createBrowserRouter([{
    path: '/',
    element: <Init/>,
}])

const App = () => {
    return <RouterProvider router={router}/>
}

export default App
