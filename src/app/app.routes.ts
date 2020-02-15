import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { PagesnotfoundComponent } from './pages/pagesnotfound/pagesnotfound.component';
import { CarsComponent } from './pages/products/cars/cars.component';
import { CategoriesComponent } from './pages/products/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { PaisesComponent } from './pages/paises/paises.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent, data: {title: 'Inicio', icon: "fa-home"} },
    { path: 'about', component: AboutComponent, data: {title: 'Acerca de', icon: "fa-home"} },
    { 
        path: 'products', 
        component: ProductsComponent,
        children: [
            { path: 'cars', component: CarsComponent, data: {title: 'Autos', icon: "fa-home"} },
            { path: 'categories/:category', component: CategoriesComponent, data: {title: '', icon: "fa-home"} }
            //,
            // { path: '', redirectTo:'' },
            // { path: '', redirectTo:'' }
        ],
        data: {title: 'Autos', icon: "fa-home"} 
    },
    { path: 'product/:code/:category/:criterio', component: ProductComponent },
    { path: 'search/:criterio', component: SearchComponent },
    { path: 'paises', component: PaisesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PagesnotfoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
