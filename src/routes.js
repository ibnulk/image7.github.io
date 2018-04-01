import NotFoundView from './components/404.vue'
import FrontPage from './components/FrontPage.vue'

// Routes
const routes = [
	{
		path: '/',
		component: FrontPage,
	},
	{
		// not found handler
		path: '*',
		component: NotFoundView,
	}
]

export default routes