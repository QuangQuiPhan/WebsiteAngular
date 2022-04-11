import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data:{
			pageTitle: "Trang chủ"
		}
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
	},
	{
		path: 'ChiTiet',
		component: ProductDetailComponent
	},
	{
		path: 'ChiTiet',
		redirectTo: '/ChiTiet'
	},
	{
		path: 'GioHang',
		component: ShoppingCartComponent
	},
	{
		path: 'DatHang',
		component: CheckoutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
