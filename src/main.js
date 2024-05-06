import { createApp } from 'vue'
import App from './App.vue'
import store from './Store.js'

import {createRouter, createWebHistory} from 'vue-router'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import HomeComponent from './components/HomeComponent.vue'
import PostsPage from './components/PostsPage.vue'
import PostDetails from './components/PostDetails.vue'
import PostsCompPage from './components/composition/PostsCompPage.vue'
import PostCompDetails from './components/composition/PostCompDetails.vue'
import AddEditPost from './components/AddEditPost.vue'
import ErrorPage from './components/ErrorPage.vue'
const routes=[
    {path:'/',component:HomeComponent},
    {path:'/posts', component:PostsPage},
    {path:'/posts/:id', component:PostDetails},
    {path:'/add', component:AddEditPost},
    {path:'/add/:id', component:AddEditPost},
    {path:'/postsComp',component:PostsCompPage},
    {path:'/postsComp/:id',component:PostCompDetails},
    {path:'/:notFound(.*)',component:ErrorPage, meta:{hideNavbar:true}}

]
let router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')
