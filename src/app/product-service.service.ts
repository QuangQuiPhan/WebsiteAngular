import { Injectable } from '@angular/core';
import { ProductsModules } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: ProductsModules[] = [
    new ProductsModules(1, 'Bánh Red Velvet','Red Velvet sở hữu một màu đỏ thắm kiêu kỳ, tuỳ vào sự tương tác của acid trong giấm và lượng bơ trong thành phần chính mà Red Velvet sẽ có những sắc đỏ riêng biệt.', 500, 1, 'assets/imgs/0_RedVelvet.jpg', 'Ảnh Bánh Red Velvet', 3),
    new ProductsModules(2, 'Bánh kem Milk cake', 'Bánh kem bông lan sữa tươi trang trí trái cây với lớp bông lan dâu, bông lan sô cô la và mứt dâu thơm ngon.', 600, 1, 'assets/imgs/1_Bánh kem Tous les Jours - Milk cake.jpg', 'Ảnh Bánh kem Milk cake', 1),
    new ProductsModules(3, 'Bánh kem Coctail cake', 'Bánh kem sữa tươi nhân mứt cocktail trái cây.', 650, 1, 'assets/imgs/2_Bánh kem Tous les Jours - Coctail Cake.jpg', 'Ảnh bánh kem Coctail cake', 1),
    new ProductsModules(4, 'Bánh kem Rainbow cake', 'Bánh kem bông lan cầu vồng với các loại hương vị trà xanh, dâu, việt quất, chuối và kem tươi.', 580, 1, 'assets/imgs/3_Bánh kem Tous les Jours - Rainbow cake.jpg', 'Ảnh bánh kem Rainbow cake', 1),
    new ProductsModules(5, 'Bánh kem Milk cake 2', 'Bánh kem sữa tươi cao cấp trang trí trái cây tươi, nhân mứt việt quất và mứt dâu.', 570, 1, 'assets/imgs/4_Bánh kem Tous les Jours - Milk cake2.jpg', 'Ảnh bánh kem Milk cake 2', 1),
    new ProductsModules(6, 'Bánh kem Chocolate cake 1', 'Bánh kem tươi sô cô la với lớp bông lan sô cô la kết hợp cùng các loại hạt: hạt óc chó, hạnh nhân, và hạt dẻ cười thơm ngon giàu dinh dưỡng.', 570, 1, 'assets/imgs/5_Bánh kem Tous les Jours - Chocolate cake 1.jpg', 'Ảnh bánh kem Chocolate cake 1', 1),
    new ProductsModules(7, 'Bánh kem Orange cake', 'Bánh kem sữa tươi với lớp bông lan cam và mứt cam thơm ngon.', 550, 1, 'assets/imgs/6_Bánh kem Tous les Jours - Orange cake.jpg', 'Ảnh bánh kem Orange cake', 1),
    new ProductsModules(8, 'Bánh kem Propose heart 2', 'Kiểu dáng trái tim ngọt ngào, lớp bánh bông lan xốp mềm kết hợp với phần kem bơ và hỗn hợp sốt mứt dâu, việt quất thanh mát đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 550, 1, 'assets/imgs/7_Bánh kem Tous les Jours - Propose heart 2.jpg', 'Ảnh bánh kem Propose heart 2', 1),
    new ProductsModules(9, 'Bánh kem Sweet cake 1', 'Bánh kem bơ bông lan vị Chocolate kết hợp với hương vani vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 550, 1, 'assets/imgs/8_Bánh kem Tous les Jours - Sweet cake 1.jpg', 'Ảnh bánh kem Sweet cake 1', 1),
    new ProductsModules(10, 'Bánh kem Propose heart 1', 'Kiểu dáng trái tim đáng yêu, lớp bánh bông lan xốp mềm kết hợp với phần kem tươi beo béo đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 450, 1, 'assets/imgs/9_Bánh kem Tous les Jours - Propose heart 1.jpg', 'Ảnh bánh kem Propose heart 1', 1),
    new ProductsModules(11, 'Bánh kem My love 2', 'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây chua ngọt thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 540, 1, 'assets/imgs/10_Bánh kem Tous les Jours - My love 2.jpg', 'Ảnh bánh kem My love 2', 1),
    new ProductsModules(12, 'Bánh kem Ganache 1', 'Lớp bánh bông lan xốp mềm kết hợp với lớp bột socola nâu ngọt dịu đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem Mocha 4 này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn và người thân yêu.', 450, 1, 'assets/imgs/11_Bánh kem Tous les Jours - Ganache 1.jpg', 'Ảnh bánh kem Ganache 1', 1),
    new ProductsModules(13, 'Bánh kem Fruity fresh cream 2', 'Cảm nhận vị bánh kem ngọt ngào như tan chảy trong miệng, lớp bánh bông lan xốp mềm, kết hợp với vị ngọt chua thanh nhẹ từ trái cây tươi vùng nhiệt đới, tất cả được hoà quyện làm nên món bánh kem vô cùng hấp dẫn! Đây thực sự là món quà tuyệt vời và cực kì phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng cảm giác thơm ngon tươi mới từ chiếc bánh kem này sẽ giúp bạn và người thân yêu tận hưởng những phút giây thư giãn thú vị.', 550, 1, 'assets/imgs/12_Bánh kem Tous les Jours - Fruity fresh cream 2.jpg', 'Ảnh bánh kem Fruity fresh cream 2', 1),
    new ProductsModules(14, 'Bánh kem Fresh 1', 'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 480, 1, 'assets/imgs/13_Bánh kem Tous les Jours - Fresh 1.jpg', 'Ảnh bánh kem Fresh 1', 1),
    new ProductsModules(15, 'Bánh kem Square choco 2', 'Lớp bánh bông lan xốp mềm, phần socola nâu phủ có vị đắng nhẹ đặc trưng, tất cả được hoà quyện làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 500, 1, 'assets/imgs/14_Bánh kem Tous les Jours - Square choco 2.jpg', 'Ảnh bánh kem Square choco 2', 1),
    new ProductsModules(16, 'Bánh kem Yogurt strawberry', 'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn. "Lưu ý: Sản phẩm cần đặt trước 24 tiếng".', 550, 1, 'assets/imgs/15_Bánh kem Tous les Jours - Yogurt strawberry.jpg', 'Ảnh bánh kem Yogurt strawberry', 1),
    new ProductsModules(17, 'Bánh kem Magic 4', 'Lớp bánh bông lan xốp mềm, phần sốt dâu tây tươi chua ngọt, kết hợp với vị trái cây thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 720, 1, 'assets/imgs/16_Bánh kem Tous les Jours - Magic 4.jpg', 'Ảnh bánh kem Magic 4', 1),
    new ProductsModules(18, 'Bánh kem Love brownie choco 2', 'Lớp bánh bông lan xốp mềm, bên ngoài được phủ bởi lớp socola nâu beo béo làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 600, 1, 'assets/imgs/17_Bánh kem Tous les Jours - Love brownie choco 2.jpg', 'Ảnh bánh kem Love brownie choco 2', 1),
    new ProductsModules(19, 'Bánh kem Awesome fruit time fresh 4', 'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây chua ngọt thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 720, 1, 'assets/imgs/18_Bánh kem Tous les Jours - Awesome fruit time fresh 4.jpg', 'Ảnh bánh kem Awesome fruit time fresh 4', 1),
    new ProductsModules(20, 'Bánh kem Mocha Square 2', 'Lớp bánh bông lan xốp mềm kết hợp với lớp mocha nâu ngọt dịu đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem Mocha square 2 này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.', 720, 1, 'assets/imgs/19_Bánh kem Tous les Jours - Mocha Square 2.jpg', 'Ảnh bánh kem Mocha Square 2', 1),
    new ProductsModules(21, 'Bánh kem Windy', 'Được phủ một lớp sốt chanh dây vàng mịn cùng với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng.', 550, 1, 'assets/imgs/20_Bánh kem Brodard - Windy.jpg', 'Ảnh bánh kem Windy', 2),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules(),
    // new ProductsModules()
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(id: number){
    
    return this.products.filter(p => p.category === id);
  }
}
