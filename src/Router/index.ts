import { createRouter, createWebHistory } from 'vue-router';
import homeview from '@/views/homeview.vue';
import gallery from '@/views/gallery.vue';
import Booking from '@/views/booking.vue';
import Packages from '@/views/package.vue';
import Booked from '@/views/booked.vue';

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: homeview
        },  {
            path:'/gallery',
            name:'galley',
            component: gallery
        },
        {
            path:'/booking',
            name:'booking',
            component: Booking
        },{
            path:'/packages',
            name:'packages',
            component: Packages
        }, {
      path: '/booked',   
      name: 'booked',
      component: Booked
    }

        
    ]
});


export default router;