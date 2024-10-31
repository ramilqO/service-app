import Employer from "@/screens/Employer";
import EmployerMoves from "@/screens/EmployerMoves";
import EmployersList from "@/screens/EmployersList";
import EmployersMap from "@/screens/EmployersMap";

export const routes = [
  {
    path: "/",
    element: EmployersList,
    headerShown: false,
  },
  {
    path: "/map",
    element: EmployersMap,
    headerShown: false,
  },
  {
    path: "/employer",
    element: Employer,
    headerShown: true,
  },
  {
    path: "/move",
    element: EmployerMoves,
    headerShown: true,
  },
];
