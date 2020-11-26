import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';


@NgModule({
    declarations: [AdminLayoutComponent, LoginPageComponent, CreatePageComponent, EditPageComponent, DashboardPageComponent],
    imports: [
        CommonModule,     //что бы использовать базовые дерективы, пайпы в модуле
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'dashboard', component: DashboardPageComponent},
                    {path: 'crate', component: CreatePageComponent},
                    {path: 'post/:id/edit', component: EditPageComponent},
                ]
            }
        ])

    ],
    exports: [RouterModule]
})
export class AdminModule {

}
