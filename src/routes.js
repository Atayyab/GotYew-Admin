/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import AboutBrand from "views/AboutBrand.jsx";
import Orders from "views/Orders.jsx";
import OrdersAdmin from "views/OrdersAdmin.jsx";
import Transaction from "views/Transaction.jsx";
import Notifications from "views/Notifications.jsx";
import SuperBrand from "views/SuperBrand.jsx";
import Payments from "views/Payments.jsx";
import SuperApprovedBrands from "views/SuperApprovedBrands.jsx";
import SuperUnapprovedBrands from "views/SuperUnapprovedBrands.jsx";
import SuperAllBrands from "views/SuperAllBrands.jsx";
import SuperBrandDetails from "views/SuperBrandDetails.jsx";
import Login from "components/Login/Login";
import LoginAdmin from "components/LoginAdmin/Login";
import Signup from "components/Signup/Signup";
import Documents from "./views/Documents";
import DocumentsEdit from "./views/DocumentsEdit";
import Coupons from "./views/Coupons";
import AddCoupon from './views/addCoupon.component';
import AddPayment from './views/addPayment.component';
// import AddCoupon from './views/createCoupon.component';
import EditCoupon from './views/editCoupon.component';
import Customers from "views/Customers";
// import AddCoupon from './views/';


const dashboardRoutes = [
  {
    path: "/about-brand",
    name: "About Brand",
    icon: "pe-7s-news-paper",
    component: AboutBrand,
    layout: "/admin",
    type: 'vendor'
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
    type: 'vendor1'
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "pe-7s-server",
    component: Orders,
    layout: "/admin",
    type: 'vendor'
  },
  {
    path: "/transaction-history",
    name: "Transaction History",
    icon: "pe-7s-graph2",
    component: Transaction,
    layout: "/admin",
    type: 'vendor'
  },
  {
    path: "/products",
    name: "Products",
    icon: "pe-7s-network",
    component: Coupons,
    layout: "/admin",
    type: 'vendor'
  },
  {
    path: "/editProduct/:id",
    name: "EditProduct",
    icon: "pe-7s-network",
    view: false,
    component: EditCoupon,
    layout: "/admin"
  },
  {
    path: "/addProduct",
    name: "AddProduct",
    icon: "pe-7s-network",
    view: false,
    component: AddCoupon,
    layout: "/admin"
  },
  {
    path: "/addPayment",
    name: "AddPayments",
    icon: "pe-7s-network",
    view: false,
    component: AddPayment,
    layout: "/admin"
  },
  {
    path: "/superbrand",
    name: "Brand",
    icon: "pe-7s-network",
    component: SuperBrand,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/orders_list",
    name: "Orders",
    icon: "pe-7s-scissors",
    component: OrdersAdmin,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "pe-7s-users",
    component: Customers,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/payments",
    name: "Payments",
    icon: "pe-7s-graph2",
    component: Payments,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/superbrandsapproved",
    name: "brands-approved",
    icon: "pe-7s-network",
    component: SuperApprovedBrands,
    layout: "/admin",
    type: 'superAdminSub'
  },
  {
    path: "/superbrandsunapproved",
    name: "brands-unapproved",
    icon: "pe-7s-network",
    component: SuperUnapprovedBrands,
    layout: "/admin",
    type: 'superAdminSub'
  },
  {
    path: "/superbrandsall",
    name: "brands-all",
    icon: "pe-7s-network",
    component: SuperAllBrands,
    layout: "/admin",
    type: 'superAdminSub'
  },
  {
    path: "/brand-details/:id",
    name: "brands-details",
    icon: "pe-7s-network",
    component: SuperBrandDetails,
    layout: "/admin",
    type: 'superAdminSub'
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-network",
    component: Login,
    layout: "/authgate",
    type: 'superAdminSub'
  },
  {
    path: "/login-admin",
    name: "Login",
    icon: "pe-7s-network",
    component: LoginAdmin,
    layout: "/authgate",
    type: 'superAdminSub'
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "pe-7s-network",
    component: Signup,
    layout: "/authgate",
    type: 'superAdminSub'
  },
  {
    path: "/documents",
    name: "Documents",
    icon: "pe-7s-file",
    component: Documents,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/docs/edit",
    name: "Edit Docs",
    icon: "pe-7s-file",
    component: DocumentsEdit,
    layout: "/admin",
    type: 'superAdminSub'
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // }
]

export default dashboardRoutes;
