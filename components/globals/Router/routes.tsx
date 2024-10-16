import Employer from "@/screens/Employer";
import EmployerMove from "@/screens/EmployerMove";
import EmployersList from "@/screens/EmployersList";
import EmployersMap from "@/screens/EmployersMap";

export const routes = [
    {
        path: "/",
        element: <EmployersList />
    },
    {
        path: "/map",
        element: <EmployersMap />
    },
    {
        path: "/employer",
        element: <Employer />
    },
    {
        path: "/move",
        element: <EmployerMove />
    }
]