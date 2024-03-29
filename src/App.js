import "./App.css";

import Admin from "./Components/Admin/Admin";
import Vendor from "./Components/Vendor/Vendor";
import SignUp from "./Components/SingUp_In/SingUp";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SingUp_In/SingIn";
import Bill from "./Components/Vendor/Bill/Bill";
function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vendor">
        <Route index element={<Vendor />} />
        <Route path="bill" element={<Bill />} />
      </Route>
    </Routes>
  );
}

export default App;