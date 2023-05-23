import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes/Home";
import SearchProfile from "./routes/Home/SearchProfile";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<HomeBody/>} />
        <Route path="search-profile" element={<SearchProfile/>}/>
      </Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
