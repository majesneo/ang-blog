import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";


@NgModule({
    declarations: [AdminLayoutComponent, LoginPageComponent, CreatePageComponent, EditPageComponent, DashboardPageComponent],
    imports: [
        CommonModule,   //что бы использовать базовые дерективы, пайпы в модуле
        FormsModule,    //для использования реактивных форм в модуле admin
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
                    {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
                    {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    providers: [AuthService, AuthGuard] //локально подключаем сервис
})
export class AdminModule {

}
