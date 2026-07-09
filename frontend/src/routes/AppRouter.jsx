import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import { ROUTES } from "../constants/routes";
import ProtectedRoute from "./ProtectedRoute";


export default function AppRouter(){

    return(

        <BrowserRouter>

            <Routes>

                <Route
                    path={ROUTES.login}
                    element={<LoginPage />}
                />

                <Route

                    path={ROUTES.dashboard}

                    element={

                        <ProtectedRoute>

                            <DashboardPage />

                        </ProtectedRoute>

                    }

                />

            </Routes>

        </BrowserRouter>

    );

}