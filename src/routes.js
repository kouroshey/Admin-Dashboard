import Home from "./pages/Home/Home"
import UserList from "./pages/UserList/UserList"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"
import EditProduct from "./pages/EditProduct/EditProduct"

let routes = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <UserList/>},
    {path: '/newuser' , element: <NewUser/>},
    {path: '/products' , element: <Products/>},
    {path: '/products/edit-product/:productID' , element: <EditProduct/>},
]
    
export default routes