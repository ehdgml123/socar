import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Test from "../components/Test";

const Loading = <div>로딩중...</div>;

const Main = lazy(() => import('../components/Main'))

const SubMainpage = lazy(() => import('../components/SubMainpage'))

const Footer = lazy(() => import('../components/Footer'))

const Inquiry = lazy (() => import('../components/Inquiry'))

const Join = lazy(() => import('../components/Join'))

const Login = lazy(() => import('../components/Login'))


const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><Main /></Suspense>
  },
  {
    path : "/SubMainpage",
    element : <Suspense fallback={Loading}><SubMainpage /></Suspense>
  },
  {
    path : "/Footer",
    element : <Suspense fallback={Loading}><Footer /></Suspense>
  },
  {
    path : "/Inquiry",
    element : <Suspense fallback={Loading}><Inquiry/></Suspense>
  },
  {
    path : "/Join",
    element : <Suspense fallback={Loading}><Join /></Suspense>
  },
  {
    path : "/Login",
    element : <Suspense fallback={Loading}><Login /></Suspense>
  },
  {
    path : "/test",
    element : <Suspense fallback={Loading}><Test /></Suspense>
  }
]);

export default root;
