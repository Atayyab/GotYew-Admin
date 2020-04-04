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
import Transaction from "views/Transaction.jsx";
import Notifications from "views/Notifications.jsx";
import SuperBrand from "views/SuperBrand.jsx";
import SuperApprovedBrands from "views/SuperApprovedBrands.jsx";
import SuperUnapprovedBrands from "views/SuperUnapprovedBrands.jsx";
import SuperAllBrands from "views/SuperAllBrands.jsx";
import SuperBrandDetails from "views/SuperBrandDetails.jsx";
import Login from "components/Login/Login";
import Signup from "components/Signup/Signup";


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
    type: 'vendor'
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
    path: "/superbrand",
    name: "Brand",
    icon: "pe-7s-network",
    component: SuperBrand,
    layout: "/admin",
    type: ''
  },
  {
    path: "/superbrandsapproved",
    name: "brands-approved",
    icon: "pe-7s-network",
    component: SuperApprovedBrands,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/superbrandsunapproved",
    name: "brands-unapproved",
    icon: "pe-7s-network",
    component: SuperUnapprovedBrands,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/superbrandsall",
    name: "brands-all",
    icon: "pe-7s-network",
    component: SuperAllBrands,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/brand-details/:id",
    name: "brands-details",
    icon: "pe-7s-network",
    component: SuperBrandDetails,
    layout: "/admin",
    type: 'superAdmin'
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-network",
    component: Login,
    layout: "/authgate",
    type: 'superAdmin'
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "pe-7s-network",
    component: Signup,
    layout: "/authgate",
    type: 'superAdmin'
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
