import adminDash from   './components/dash/adminDash.vue';
import employeeDash from './components/dash/employeeDash.vue';
import managerDash from './components/dash/managerDash.vue';
import login from './components/loginPage.vue';

export const routes = [
    {path : '/', component:login},
    {path : '/adminDash', component:adminDash},
    {path : '/employeeDash', component:employeeDash},
    {path : '/managerDash', component:managerDash},
    
];