import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import DetailedProduct from "./pages/DetailedProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/products/:category" element={<AllProducts />} />
        </Routes>
        <Routes>
          <Route path="/products" element={<AllProducts />} />
        </Routes>

        <Routes>
          <Route path="/product/:id" element={<DetailedProduct />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
        <Routes>
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
