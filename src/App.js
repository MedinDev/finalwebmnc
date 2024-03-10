import {AllRoutes} from "./routes/AllRoute";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <MainLayout>
            <div className="bg-white dark:bg-bgkd-950">
                <AllRoutes/>
            </div>
        </MainLayout>
    );
}

export default App;