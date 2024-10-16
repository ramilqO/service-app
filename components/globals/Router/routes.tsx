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
    }
]