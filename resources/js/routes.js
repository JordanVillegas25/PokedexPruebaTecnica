const Home = () => import('./components/Home.vue')
const RegisterUser = () => import('./components/autentication/RegisterUser.vue')
const Loguin = () => import('./components/autentication/Loguin.vue')

export const routes=[
    {
        name: 'home',
        path: '/',
        component:Home
    },    {
        name: 'registerUser',
        path: '/registerUser',
        component:RegisterUser
    },    {
        name: 'loguin',
        path: '/loguin',
        component:Loguin
    }
]