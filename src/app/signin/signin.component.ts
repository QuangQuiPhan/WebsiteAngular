import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
    <div class="content">
    <form (ngSubmit)="submitForm()" class="form col__4">
        <h2>Đăng nhập</h2>
        <div class="form__group">
            <label for="User">Tài khoản đăng nhập</label>
            <input type="text" id="User" name="user" class="form__group__control" required [(ngModel)]="user" #userInput="ngModel">
            <span class="required" *ngIf="userInput.invalid && userInput.touched">Tên đăng nhập không được để trống</span>
        </div>
        <div class="form__group">
            <label for="Pwd">Mật khẩu</label>
            <input type="password" id="Pwd" name="pwd" class="form__group__control" required [(ngModel)]="pwd" #pwdInput="ngModel">
            <span class="required" *ngIf="pwdInput.invalid && pwdInput.touched">Mật khẩu không được để trống</span>
        </div>
        <div class="form__group">
            <a href="#" class="form__group__forgot">Quên mật khẩu?</a>
        </div>
        <div class="form__group">
            <input type="submit" value="Đăng nhập" class="btn btn--primary">
        </div>
        <div class="form__group">
            <a href="DangKy" class="form__group__signup">Bạn có tài khoản chưa? &nbsp;<span> Đăng ký</span></a>
        </div>
    </form>
  </div>`,
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: string = '';
  pwd: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const mess = `Hello ${this.user}`;
    alert(mess);
  }
}
