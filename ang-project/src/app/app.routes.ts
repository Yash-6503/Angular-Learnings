import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Home } from './home/home';
import { DataBinding } from './data-binding/data-binding';
import { User } from './user/user';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ControlFlow } from './control-flow/control-flow';
import { Signal } from './signal/signal';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
    {
        path:'home',
        component:Home
    },
    {
        path:'admin',
        component:Admin
    },
    {
        path:'dataBinding',
        component:DataBinding
    },
    {
        path:'user',
        component:User
    },
    {
        path:'about',
        component:About
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'dataBinding',
        component:DataBinding
    },
    {
        path:'controlFlow',
        component:ControlFlow
    },
    {
        path:'signal',
        component:Signal
    }
];
