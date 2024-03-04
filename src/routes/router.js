import {createRouter, createWebHistory } from 'vue-router';
import Poaching from '../pages/pokePoaching.vue';
import Captured from '../pages/captured.vue';
import Extinct from '../pages/extinct.vue';
import Finance from '../pages/finance.vue';


const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Poaching',
            component: Poaching,
        },
        {
            path: '/captured',
            name: 'Captured',
            component: Captured,
        },
        {
            path: '/extinct',
            name: 'Extinct',
            component: Extinct,
        },
        {
            path: '/finance',
            name: 'Finance',
            component: Finance,
        },

    ]
})


export {router};