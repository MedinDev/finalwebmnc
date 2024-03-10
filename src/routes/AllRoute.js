import {Routes, Route} from "react-router-dom";
import {Location, Self, Home, Transport} from "../pages";


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/self" element={<Self/>}/>
            <Route path="/location" element={<Location/>}/>
            <Route path="/transport" element={<Transport/>}/>
        </Routes>
    );
};
