import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'GioiThieu',
		component: AboutUsComponent
	},
	{
		path: 'LienHe',
		component: ContactComponent
	},
	{
		path: 'SanPham',
		component: ProductComponent
	},
	{
		path: 'DangNhap',
		component: SigninComponent
	},
	{
		path: 'DangKy',
		component: SignupComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
