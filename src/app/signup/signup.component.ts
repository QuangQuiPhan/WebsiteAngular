import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
      <div class="content">
          <form (ngSubmit)="signupForm()" class="form col__4">
              <h2>Đăng ký</h2>
              <div class="form__group">
                  <label for="User">Tài khoản đăng nhập</label>
                  <input type="text" id="User" class="form__group__control" name="user" [(ngModel)]="user" #userInput="ngModel" required>
                  <span class="required" *ngIf="userInput.invalid && userInput.touched">Tên đăng nhập không được để trống</span>
              </div>
              <div class="form__group">
                  <label for="Pwd">Mật khẩu</label>
                  <input type="password" id="Pwd" class="form__group__control" name="pwd" [(ngModel)]="pwd" #pwdInput="ngModel" required>
                  <span class="required" *ngIf="pwdInput.invalid && pwdInput.touched">Mật khẩu không được để trống</span>
              </div>
              <div class="form__group">
                  <label for="ConfirmPwd">Nhập lại mật khẩu</label>
                  <input type="password" id="ConfirmPwd" class="form__group__control" name="confirm" [(ngModel)]="confirm" #confirmInput="ngModel" required>
                  <span class="required" *ngIf="(confirm != pwd) && (confirmInput.invalid && confirmInput.touched)">Mật khẩu nhập lại không trùng khớp</span>
              </div>
              <div class="form__group">
                  <label for="Email">Email( không bắt buộc)</label>
                  <input type="email" id="Email" class="form__group__control" name="email" [(ngModel)]="email" >
              </div>
              <div class="form__group">
                  <label for="Phone">Điện thoại</label>
                  <input type="tel" id="Phone" class="form__group__control" name="phone" [(ngModel)]="phone" #phoneInput="ngModel" required>
                  <span class="required" *ngIf="phoneInput.invalid && phoneInput.touched">Điện thoại không được để trống</span>
              </div>
              <div class="form__group">
                  <input type="submit" value="Đăng ký" class="btn btn--danger">
              </div>
              <div class="form__group">
                  <a href="DangNhap" class="form__group__signup">Bạn đã có tài khoản rồi? &nbsp;<span> Đăng nhập</span></a>
              </div>
          </form>
      </div>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: string = '';
  pwd: string = '';
  confirm: string = '';
  email: string = '';
  phone: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  signupForm(): void {
    if(this.pwd != this.confirm || this.pwd === '')
      alert("Mật khẩu nhập lại không chính xác!!!");
    else if(this.user == '' || this.phone == '')
      alert("Đăng ký không thành công!!!");
    else
      alert("Đăng ký tài khoản thành công!!");
  }
}
