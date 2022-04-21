const Home = () => import('./components/Home.vue')
const RegisterUser = () => import('./components/autentication/RegisterUser.vue')
const Loguin = () => import('./components/autentication/Loguin.vue')
const FavoritePokemon = () => import('./components/pokemon/Favorites.vue')
export const routes = [//realiza el enrutamiento e importacion de los componentes para poder ser accedidos por los demas componentes
    {
        name: 'home',
        path: '/',
        component: Home
    }, {
        name: 'registerUser',
        path: '/registerUser',
        component: RegisterUser
    }, {
        name: 'loguin',
        path: '/loguin',
        component: Loguin
    }, {
        name: 'favoritepokemon',
        path: '/favoritepokemon',
        component: FavoritePokemon
    }
]