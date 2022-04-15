import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="row">
      <div class="sendemail col__6">
        <form (ngSubmit)="formSubmit()" class="form">
          <div class="form__group">
            <label for="name">Tên khách hàng</label>
            <input 
              type="text" 
              id="name" 
              name="name" r
              equired 
              [(ngModel)]="name" 
              #nameInput="ngModel"
              placeholder="Nhập tên khách hàng"/>
            <span *ngIf="nameInput.invalid && nameInput.touched">Chưa nhập tên khách hàng</span>
          </div>
          <div class="form__group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ví dụ: nguyenvana@gmail.com"
              [(ngModel)]="email"
              required
              email
              #emailInput="ngModel"
            />
            <span *ngIf="emailInput.invalid && emailInput.touched">Email không được để trống!!!</span>
          </div>
          <div class="form__group">
            <label for="content">Nội dung tin nhắn</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="5"
              [(ngModel)]="content"
              #contentInput
              placeholder="Nhập nội dung cần gửi!!!"
            ></textarea>
          </div>
          <div class="form__control">
            <button type="submit" class="btn btn--primary">
              Gửi <mat-icon>send</mat-icon>
            </button>
          </div>
        </form>
      </div>
      <div class="ggmap col__6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.678582324737!2d106.69033738199472!3d10.861777732543818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175283bd8bf2793%3A0x88427212f7695b45!2zQ2jhu6MgQW4gUGjDuiDEkMO0bmc!5e0!3m2!1svi!2s!4v1650009540426!5m2!1svi!2s"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}
  name: string = '';
  email: string = '';
  content: string = '';
  ngOnInit(): void {}
  formSubmit(): void {
    alert("Đã gửi thành công!!!");
  }
}
