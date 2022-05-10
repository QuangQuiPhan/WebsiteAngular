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
import { CategoryComponent } from './category/category.component';
import { data } from 'jquery';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data:{
			title: "Trang chủ"
		}
	},
	{
		path: 'GioiThieu',
		component: AboutUsComponent,
		data: { title: "Giới thiệu"}
	},
	{
		path: 'LienHe',
		component: ContactComponent,
		data: { title: "Liên hệ"}
	},
	{
		path: 'SanPham',
		component: ProductComponent,
		data: { title: "Sản phẩm"}
	},
	{
		path: 'DangNhap',
		component: SigninComponent,
		data: { title: "Đăng nhập"}
	},
	{
		path: 'DangKy',
		component: SignupComponent,
		data: { title: "Đăng ký"}
	},
	{
		path: 'ChiTiet/:id',
		component: ProductDetailComponent,
		data: { title: "Chi tiết sản phẩm"}
	},
	{
		path: 'GioHang',
		component: ShoppingCartComponent,
		data: { title: "Giỏ hàng"}
	},
	{
		path: 'DatHang',
		component: CheckoutComponent,
		data: { title: "Đặt hàng"}
	},
	{
		path: 'LoaiBanh/:id',
		component: CategoryComponent,
		data: { title: "Loại bánh" }
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
