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

const Carcheck = lazy(() => import('../components/Carcheck'))

const InquiryCreate = lazy(() => import('../components/InquiryCreate'))

const InquiryDetail = lazy(() => import("../components/InquiryDetail"));


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
  },
  {
    path : "/carcheck",
    element : <Suspense fallback={Loading}><Carcheck /></Suspense>
  },
  {
    path : "/inquiryCreate",
    element : <Suspense fallback={Loading}><InquiryCreate /></Suspense>
  },
  {
    path: "/inquiry/:id",
    element: <Suspense fallback={Loading}><InquiryDetail /></Suspense>
  }
]);

export default root;


