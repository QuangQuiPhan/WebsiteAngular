import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <div class="content">
      <div class="row">
        <div class="col__6">
          <form (ngSubmit)="formSubmit()" class="form">
            <h2>Thông tin khách hàng</h2>
            <div class="form__group">
              <label for="fullname">Họ tên khách hàng</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                required
                placeholder="Họ tên khách hàng"
              />
              <!-- <span>không được để trống!!!</span> -->
            </div>
            <div class="form__group">
              <label for="phone">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                id="phone"
                required
                placeholder="Số điện thoại"
              />
              <!-- <span>không được để trống!!!</span> -->
            </div>
            <div class="form__group">
              <label for="address">Địa chỉ nhận hàng</label>
              <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Địa chỉ nhận hàng"
              />
              <!-- <span>không được để trống!!!</span> -->
            </div>
            <div class="form__group">
              <label for="email">Email( Không bắt buộc)</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email( Không bắt buộc)"
              />
              <!-- <span>không được để trống!!!</span> -->
            </div>
            <div class="form__group">
              <div class="row">
                <div class="col__4">
                  <input type="radio" name="money" id="money" value="Tiền mặt" [(ngModel)]="money" checked />
                  <label for="money">Tiền mặt</label>
                </div>
                <div class="col__4">
                  <input type="radio" name="money" id="visa" value="Visa" [(ngModel)]="money" />
                  <label for="visa">Visa</label>
                </div>
                <div class="col__4">
                  <input type="radio" name="money" id="zalo" value="Zalo Pay" [(ngModel)]="money" />
                  <label for="zalo">Zalo pay</label>
                </div>
              </div>
            </div>
            <div class="form__group">
              <label for="gidcode">Mã giảm giá</label>
              <input
                type="text"
                id="gidcode"
                required
                placeholder="Mã giảm giá"
              />
            </div>
            <div class="form__control">
              <button type="submit" class="btn btn--primary">Đặt hàng</button>
            </div>
          </form>
        </div>
        <div class="col__6">
          <div class="items">
            <div class="items__item">
              <div class="items__item__image">
                <img src="assets/imgs/1.png" alt="Ảnh minh họa bánh kem dâu" />
              </div>
              <div class="items__item__content">
                <div class="items__item__content__name">
                  <h4>Bánh kem dâu</h4>
                </div>
                <div class="items__item__content__price">
                  <p>Số lượng: 1</p>
                  <p>Thành tiền: $300</p>
                </div>
              </div>
              <div class="items__item__remove">
                <h3>x</h3>
              </div>
            </div>
          </div>

          <div class="total">
            <table id="table">
              <thead>
                <th>Thanh toán đơn hàng</th>
              </thead>
              <tbody>
                <tr>
                  <td>Số lượng sản phẩm</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Tổng tiền</td>
                  <td>$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor() {}
  money: string = "Tiền mặt";
  ngOnInit(): void {}

  formSubmit(): void {
    alert(this.money);
  }
}
