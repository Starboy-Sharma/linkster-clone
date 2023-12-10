import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, title: 'Linkster | Login' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
