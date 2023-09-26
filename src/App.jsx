import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import LayoutPublic from "./layouts/LayoutPublic";
import Notfound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";

const App = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route element={<Inicio />} index />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Blog/:id" element={<PostDetail />} />
                    <Route path="/Nosotros" element={<Nosotros />} />
                    <Route element={<Notfound />} path="*" />
                </Route>
            </Routes>
        </>
    );
};

export default App;
