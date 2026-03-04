import { createRouter, createWebHistory } from 'vue-router';
import homeview from '@/views/homeview.vue';
import card from '@/views/card.vue';
import gallery from '@/views/gallery.vue';


const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: homeview
        }, {
            path:'/card',
            name:'card',
            component: card
        },  {
            path:'/gallery',
            name:'galley',
            component: gallery
        }
        
    ]
});


export default router;