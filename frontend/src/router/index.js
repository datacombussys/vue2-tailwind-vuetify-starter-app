import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home'
import leftDrawer from "@/components/navigation/left-drawer-component"

//Admin pages
import adminDashboard from "@/pages/admin-portal/dashboard"
import adminManageTeachers from "@/pages/admin-portal/manage-teachers"
import adminManageParents from "@/pages/admin-portal/manage-parents"
import adminManageStudents from "@/pages/admin-portal/manage-students"
import adminPurchaseOrders from "@/pages/admin-portal/purchase-orders"
import adminManageVendors from "@/pages/admin-portal/manage-vendors"
import adminSettings from "@/pages/admin-portal/settings"

//Parent pages
import parentDashboard from "@/pages/parent-portal/dashboard"
import newOrder from "@/pages/parent-portal/new-order"
import orderHistory from "@/pages/parent-portal/order-history"

//Teacher pages
import teacherDashboard from "@/pages/teacher-portal/dashboard"
import approveOrders from "@/pages/teacher-portal/approve-orders"

//Vendor pages
import vendorDashboard from "@/pages/vendor-portal/dashboard"
import inventoryList from "@/pages/vendor-portal/vendor-catalog"

//Student pages
import studentDashboard from "@/pages/student-portal/dashboard"

//Products and Services
import productsServices from "@/pages/products-services/manage-products"

//Shopping Cart
import shoppingCart from "@/pages/shopping-cart/website"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
	},
	//Admin Pages
  {
		path: "/admin",
		name: "admin",
		meta: { requiresAuth: false },
		components: {
			main: adminDashboard,
			left: leftDrawer
		}
	},
	{
		path: "/admin/vendors",
		name: "admin-vendors",
		meta: { requiresAuth: false },
		components: {
			main: adminManageVendors,
			left: leftDrawer
		}
	},
	{
		path: "/admin/teachers",
		name: "admin-teachers",
		meta: { requiresAuth: false },
		components: {
			main: adminManageTeachers,
			left: leftDrawer
		}
	},
	{
		path: "/admin/parents",
		name: "admin-parents",
		meta: { requiresAuth: false },
		components: {
			main: adminManageParents,
			left: leftDrawer
		}
	},
	{
		path: "/admin/students",
		name: "admin-students",
		meta: { requiresAuth: false },
		components: {
			main: adminManageStudents,
			left: leftDrawer
		}
	},
	{
		path: "/admin/POs",
		name: "admin-POs",
		meta: { requiresAuth: false },
		components: {
			main: adminPurchaseOrders,
			left: leftDrawer
		}
	},
	{
		path: "/admin/vendors",
		name: "admin-vendors",
		meta: { requiresAuth: false },
		components: {
			main: adminManageVendors,
			left: leftDrawer
		}
	},
	{
		path: "/admin/settings",
		name: "admin-settings",
		meta: { requiresAuth: false },
		components: {
			main: adminSettings,
			left: leftDrawer
		}
	},
	//teacher Pages
  {
		path: "/teacher",
		name: "teacher",
		meta: { requiresAuth: false },
		components: {
			main: teacherDashboard,
			left: leftDrawer
		}
	},
	{
		path: "/teacher/aprove",
		name: "approve-orders",
		meta: { requiresAuth: false },
		components: {
			main: approveOrders,
			left: leftDrawer
		}
	},
	//Parent Pages
  {
		path: "/parent",
		name: "parent",
		meta: { requiresAuth: false },
		components: {
			main: parentDashboard,
			left: leftDrawer
		}
	},
	{
		path: "/order",
		name: "order",
		meta: { requiresAuth: false },
		components: {
			main: newOrder,
			left: leftDrawer
		}
	},
	{
		path: "/order-history",
		name: "order-history",
		meta: { requiresAuth: false },
		components: {
			main: orderHistory,
			left: leftDrawer
		}
	},
	//Vendor Pages
	{
		path: "/vendor",
		name: "vendor",
		meta: { requiresAuth: false },
		components: {
			main: vendorDashboard,
			left: leftDrawer
		}
	},
	{
		path: "/vendor/catalog",
		name: "vendor-catalog",
		meta: { requiresAuth: false },
		components: {
			main: inventoryList,
			left: leftDrawer
		}
	},
	//Student Pages
  {
		path: "/student",
		name: "student",
		meta: { requiresAuth: false },
		components: {
			main: studentDashboard,
			left: leftDrawer
		}
	},
	//Porducts and Services (Inventory)
  {
		path: "/products-services",
		name: "products-services",
		meta: { requiresAuth: false },
		components: {
			main: productsServices,
			left: leftDrawer
		}
	},
	//Shopping Cart
  {
		path: "/shopping-cart",
		name: "Shopping Cart",
		meta: { requiresAuth: false },
		component: shoppingCart
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
