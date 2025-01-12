import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path:'page',component: PageComponent},
    { path:'register', component:RegisterComponent}
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
