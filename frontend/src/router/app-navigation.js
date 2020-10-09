


const main = [
	{ title: 'Home', icon: 'mdi-home', path: '/' },
	{ title: 'Dashboard', icon: 'mdi-gauge', path: '/' },
	{ title: 'Admin', icon: 'mdi-account-supervisor-circle', path: '/admin' },
	{ title: 'Vendors', icon: 'mdi-cube-send', path: '/' },
	{ title: 'Teachers', icon: 'mdi-teach', path: '/'},
	{ title: 'Parents', icon: 'mdi-account-child-circle', path: '/' },
]

const admin = [
	{ title: 'Home', icon: 'mdi-home', path: '/' },
	{ title: 'Dashboard', icon: 'mdi-gauge', path: '/admin' },
	{ title: 'Manage Teachers', icon: 'mdi-teach', path: '/admin/teachers' },
	{ title: 'Manage Vendors', icon: 'mdi-truck-fast-outline', path: '/admin/vendors' },
	{ title: 'Manage Parents', icon: 'mdi-account-child-outline', path: '/admin/parents' },
	{ title: 'Manage Students', icon: 'mdi-human-male-child', path: '/admin/students' },
	{ title: 'Purchase Orders', icon: 'mdi-post-outline', path: '/admin/POs' },
	{ title: 'Settings', icon: 'mdi-cog', path: '/admin/settings' }
]

const teacher = [
	{ title: 'Home', icon: 'mdi-home', path: '/' },
	{ title: 'Dashboard', icon: 'mdi-gauge', path: '/teacher'},
	{ title: 'Approve Orders', icon: 'mdi-account-supervisor-circle', path: '/teacher/aprove' },
]

const parent = [
	{ title: 'Home', icon: 'mdi-home', path: '/' },
	{ title: 'Dashboard', icon: 'mdi-gauge', path: '/parent' },
	{ title: 'New Order', icon: 'mdi-account-supervisor-circle', path: '/order' },
	{ title: 'Order Historyr', icon: 'mdi-account-supervisor-circle', path: '/order-history' },
]

const vendor = [
	{ title: 'Home', icon: 'mdi-home', path: '/' },
	{ title: 'Dashboard', icon: 'mdi-gauge', path: '/vendor' },
	{ title: 'Vendor Catalog', icon: 'mdi-account-supervisor-circle', path: '/vendor/catalog' },
]

export { main }
export { admin }
export { teacher }
export { parent }
export { vendor }
