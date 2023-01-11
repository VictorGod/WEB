import {createRouter, createWebHistory } from 'vue-router'
import MainCatolog from '../components/MainCatolog'
import MainPage from '../components/mainPage/mainPage'
import CartRent from '../components/CartRent'
import RentPage from '../components/RentPage'
import CommentPlace from '../components/CommentPlace'



const routes = [
    {
        path: '/',
        name: "MainPage",
        component: MainPage
    },
    {
        path: '/catolog',
        name: "Catolog",
        component: MainCatolog
    },
    {
        path: '/cart',
        name: "Cart",
        component: CartRent,
        props: true,
    },
     {
         path: '/rent',
         name: "Rent",
         component: RentPage,
         props: true,
     },
     {
        path: '/comment',
        name: "Comment",
        component: CommentPlace,
        props: true,
    }

 
]

const router = createRouter({
    routes,
    history: createWebHistory (process.env.BASE_URL)
})

export default router;