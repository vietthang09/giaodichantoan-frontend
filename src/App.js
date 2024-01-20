import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateTransaction from "./pages/CreateTransaction";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Footer from "./components/Footer";
import WithDrawal from "./pages/Withdrawal";
import TransactionDetails from "./pages/TransactionDetails";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="container h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tao-moi" element={<CreateTransaction />} />
            <Route path="/ca-nhan" element={<Profile />} />
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="/nap-tien" element={<Deposit />} />
            <Route path="/rut-tien" element={<WithDrawal />} />
            <Route path="/giao-dich/:id" element={<TransactionDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        hideProgressBar
        icon={false}
        theme="dark"
        closeOnClick
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default App;
