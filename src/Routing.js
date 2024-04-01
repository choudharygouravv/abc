import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Clothes from "./Clothes";
import Jwellery from "./Jwellery";
import Electronic from "./Electronic";
import Header from "./Header";
import Footer from "./Footer";
import WClothes from "./WClothes";
import Post from "./Post";
import Update from "./Update";
import Delete from "./Delete";


function Routing()
{
    return(
        <div>
          <BrowserRouter>
          <Header></Header>
          <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="clothes" element={<Clothes></Clothes>}></Route>
                <Route path="wclothes" element={<WClothes></WClothes>}></Route>
                <Route path="jwellery" element={<Jwellery></Jwellery>}></Route>
                <Route path="electronics" element={<Electronic></Electronic>}></Route>
                <Route path="post" element={<Post></Post>}></Route>
                <Route path="update" element={<Update></Update>}></Route>
                <Route path="delete" element={<Delete></Delete>}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
           
        
        </div>
    )
}
export default Routing;