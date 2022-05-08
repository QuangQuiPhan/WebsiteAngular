import { Injectable } from '@angular/core';
import { ProductsModules } from './products-modules';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  createDB(){
    const products = [
      {
        id: 1,
        title: 'Bánh Red Velvet',
        description:
          'Red Velvet sở hữu một màu đỏ thắm kiêu kỳ, tuỳ vào sự tương tác của acid trong giấm và lượng bơ trong thành phần chính mà Red Velvet sẽ có những sắc đỏ riêng biệt.',
        price: 500,
        quality: 1,
        avatar: 'assets/imgs/0_RedVelvet.jpg',
        alt: 'Ảnh Bánh Red Velvet',
        category: 3,
      },
      {
        id: 2,
        title: 'Bánh kem Milk cake',
        description:
          'Bánh kem bông lan sữa tươi trang trí trái cây với lớp bông lan dâu, bông lan sô cô la và mứt dâu thơm ngon.',
        price: 600,
        quality: 1,
        avatar: 'assets/imgs/1_Bánh kem Tous les Jours - Milk cake.jpg',
        alt: 'Ảnh Bánh kem Milk cake',
        category: 1,
      },
      {
        id: 3,
        title: 'Bánh kem Coctail cake',
        description: 'Bánh kem sữa tươi nhân mứt cocktail trái cây.',
        price: 650,
        quality: 1,
        avatar: 'assets/imgs/2_Bánh kem Tous les Jours - Coctail Cake.jpg',
        alt: 'Ảnh bánh kem Coctail cake',
        category: 1,
      },
      {
        id: 4,
        title: 'Bánh kem Rainbow cake',
        description:
          'Bánh kem bông lan cầu vồng với các loại hương vị trà xanh, dâu, việt quất, chuối và kem tươi.',
        price: 580,
        quality: 1,
        avatar: 'assets/imgs/3_Bánh kem Tous les Jours - Rainbow cake.jpg',
        alt: 'Ảnh bánh kem Rainbow cake',
        category: 1,
      },
      {
        id: 5,
        title: 'Bánh kem Milk cake 2',
        description:
          'Bánh kem sữa tươi cao cấp trang trí trái cây tươi, nhân mứt việt quất và mứt dâu.',
        price: 570,
        quality: 1,
        avatar: 'assets/imgs/4_Bánh kem Tous les Jours - Milk cake2.jpg',
        alt: 'Ảnh bánh kem Milk cake 2',
        category: 1,
      },
      {
        id: 6,
        title: 'Bánh kem Chocolate cake 1',
        description:
          'Bánh kem tươi sô cô la với lớp bông lan sô cô la kết hợp cùng các loại hạt: hạt óc chó, hạnh nhân, và hạt dẻ cười thơm ngon giàu dinh dưỡng.',
        price: 570,
        quality: 1,
        avatar: 'assets/imgs/5_Bánh kem Tous les Jours - Chocolate cake 1.jpg',
        alt: 'Ảnh bánh kem Chocolate cake 1',
        category: 1,
      },
      {
        id: 7,
        title: 'Bánh kem Orange cake',
        description: 'Bánh kem sữa tươi với lớp bông lan cam và mứt cam thơm ngon.',
        price: 550,
        quality: 1,
        avatar: 'assets/imgs/6_Bánh kem Tous les Jours - Orange cake.jpg',
        alt: 'Ảnh bánh kem Orange cake',
        category: 1,
      },
      {
        id: 8,
        title: 'Bánh kem Propose heart 2',
        description:
          'Kiểu dáng trái tim ngọt ngào, lớp bánh bông lan xốp mềm kết hợp với phần kem bơ và hỗn hợp sốt mứt dâu, việt quất thanh mát đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 550,
        quality: 1,
        avatar: 'assets/imgs/7_Bánh kem Tous les Jours - Propose heart 2.jpg',
        alt: 'Ảnh bánh kem Propose heart 2',
        category: 1,
      },
      {
        id: 9,
        title: 'Bánh kem Sweet cake 1',
        description:
          'Bánh kem bơ bông lan vị Chocolate kết hợp với hương vani vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 550,
        quality: 1,
        avatar: 'assets/imgs/8_Bánh kem Tous les Jours - Sweet cake 1.jpg',
        alt: 'Ảnh bánh kem Sweet cake 1',
        category: 1,
      },
      {
        id: 10,
        title: 'Bánh kem Propose heart 1',
        description:
          'Kiểu dáng trái tim đáng yêu, lớp bánh bông lan xốp mềm kết hợp với phần kem tươi beo béo đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 450,
        quality: 1,
        avatar: 'assets/imgs/9_Bánh kem Tous les Jours - Propose heart 1.jpg',
        alt: 'Ảnh bánh kem Propose heart 1',
        category: 1,
      },
      {
        id: 11,
        title: 'Bánh kem My love 2',
        description:
          'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây chua ngọt thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 540,
        quality: 1,
        avatar: 'assets/imgs/10_Bánh kem Tous les Jours - My love 2.jpg',
        alt: 'Ảnh bánh kem My love 2',
        category: 1,
      },
      {
        id: 12,
        title: 'Bánh kem Ganache 1',
        description:
          'Lớp bánh bông lan xốp mềm kết hợp với lớp bột socola nâu ngọt dịu đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem Mocha 4 này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn và người thân yêu.',
        price: 450,
        quality: 1,
        avatar: 'assets/imgs/11_Bánh kem Tous les Jours - Ganache 1.jpg',
        alt: 'Ảnh bánh kem Ganache 1',
        category: 1,
      },
      {
        id: 13,
        title: 'Bánh kem Fruity fresh cream 2',
        description:
          'Cảm nhận vị bánh kem ngọt ngào như tan chảy trong miệng, lớp bánh bông lan xốp mềm, kết hợp với vị ngọt chua thanh nhẹ từ trái cây tươi vùng nhiệt đới, tất cả được hoà quyện làm nên món bánh kem vô cùng hấp dẫn! Đây thực sự là món quà tuyệt vời và cực kì phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng cảm giác thơm ngon tươi mới từ chiếc bánh kem này sẽ giúp bạn và người thân yêu tận hưởng những phút giây thư giãn thú vị.',
        price: 550,
        quality: 1,
        avatar: 'assets/imgs/12_Bánh kem Tous les Jours - Fruity fresh cream 2.jpg',
        alt: 'Ảnh bánh kem Fruity fresh cream 2',
        category: 1,
      },
      {
        id: 14,
        title: 'Bánh kem Fresh 1',
        description:
          'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 480,
        quality: 1,
        avatar: 'assets/imgs/13_Bánh kem Tous les Jours - Fresh 1.jpg',
        alt: 'Ảnh bánh kem Fresh 1',
        category: 1,
      },
      {
        id: 15,
        title: 'Bánh kem Square choco 2',
        description:
          'Lớp bánh bông lan xốp mềm, phần socola nâu phủ có vị đắng nhẹ đặc trưng, tất cả được hoà quyện làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 500,
        quality: 1,
        avatar: 'assets/imgs/14_Bánh kem Tous les Jours - Square choco 2.jpg',
        alt: 'Ảnh bánh kem Square choco 2',
        category: 1,
      },
      {
        id: 16,
        title: 'Bánh kem Yogurt strawberry',
        description:
          'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn. "Lưu ý: Sản phẩm cần đặt trước 24 tiếng".',
        price: 550,
        quality: 1,
        avatar: 'assets/imgs/15_Bánh kem Tous les Jours - Yogurt strawberry.jpg',
        alt: 'Ảnh bánh kem Yogurt strawberry',
        category: 1,
      },
      {
        id: 17,
        title: 'Bánh kem Magic 4',
        description:
          'Lớp bánh bông lan xốp mềm, phần sốt dâu tây tươi chua ngọt, kết hợp với vị trái cây thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 720,
        quality: 1,
        avatar: 'assets/imgs/16_Bánh kem Tous les Jours - Magic 4.jpg',
        alt: 'Ảnh bánh kem Magic 4',
        category: 1,
      },
      {
        id: 18,
        title: 'Bánh kem Love brownie choco 2',
        description:
          'Lớp bánh bông lan xốp mềm, bên ngoài được phủ bởi lớp socola nâu beo béo làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem với cách trang trí đơn giản nhưng vô cũng bắt mắt sẽ thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 600,
        quality: 1,
        avatar: 'assets/imgs/17_Bánh kem Tous les Jours - Love brownie choco 2.jpg',
        alt: 'Ảnh bánh kem Love brownie choco 2',
        category: 1,
      },
      {
        id: 19,
        title: 'Bánh kem Awesome fruit time fresh 4',
        description:
          'Lớp bánh bông lan xốp mềm, phần kem tươi beo béo, kết hợp với vị trái cây chua ngọt thanh nhẹ làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 720,
        quality: 1,
        avatar:
          'assets/imgs/18_Bánh kem Tous les Jours - Awesome fruit time fresh 4.jpg',
        alt: 'Ảnh bánh kem Awesome fruit time fresh 4',
        category: 1,
      },
      {
        id: 20,
        title: 'Bánh kem Mocha Square 2',
        description:
          'Lớp bánh bông lan xốp mềm kết hợp với lớp mocha nâu ngọt dịu đã làm nên món bánh kem vô cùng hấp dẫn! Chiếc bánh kem này thực sự là món quà tuyệt vời và phù hợp để dành tặng cho các dịp chúc mừng. Hi vọng chiếc bánh kem Mocha square 2 này sẽ làm tăng hương vị ngọt ngào cho cuộc sống của bạn.',
        price: 720,
        quality: 1,
        avatar: 'assets/imgs/19_Bánh kem Tous les Jours - Mocha Square 2.jpg',
        alt: 'Ảnh bánh kem Mocha Square 2',
        category: 1,
      },
    
      {
        id: 21,
        title: 'Bánh kem Windy',
        description:
          'Được phủ một lớp sốt chanh dây vàng mịn cùng với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng.',
        price: 550,
        quality: 1,
        avatar: 'assets/imgs/20_Bánh kem Brodard - Windy.jpg',
        alt: 'Ảnh bánh kem Windy',
        category: 2,
      },
      {
        id: 22,
        title: 'Bánh kem Bông Tuyết',
        description:
          'Được phủ một kem tươi mềm mịn cùng với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng.',
        price: 600,
        quality: 1,
        avatar: 'assets/imgs/21_Bánh kem Brodard - Bông Tuyết.jpg',
        alt: 'Ảnh bánh kem Bông Tuyết',
        category: 2,
      },
      {
        id: 23,
        title: 'Bánh kem Tiramisu Pas',
        description:
          'Được phủ một kem tươi mềm mịn cùng với vị đắng nhẹ của socola và với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng. Lưu ý: Vui lòng đặt trước 24h. Thương hiệu bánh Brodard chỉ có ở Tp Hồ Chí Minh.',
        price: 600,
        quality: 1,
        avatar: 'assets/imgs/22_Bánh kem Brodard - Tiramisu Pas.jpg',
        alt: 'Ảnh bánh kem Tiramisu Pas',
        category: 2,
      },
      {
        id: 24,
        title: 'Bánh kem Bánh Bắp',
        description:
          'Được phủ một kem tươi mềm mịn cùng với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng.',
        price: 600,
        quality: 1,
        avatar: 'assets/imgs/23_Bánh kem Brodard - Bánh Bắp.jpg',
        alt: 'Ảnh bánh kem Bánh Bắp',
        category: 2,
      },
      {
        id: 25,
        title: 'Bánh kem Ngọt Ngào',
        description:
          'Được phủ một kem tươi mềm mịn cùng với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng. Lưu ý: Vui lòng đặt trước 24h. Thương hiệu bánh Brodard chỉ có ở Tp Hồ Chí Minh.',
        price: 750,
        quality: 1,
        avatar: 'assets/imgs/24_Bánh kem Brodard - Ngọt Ngào.jpg',
        alt: 'Ảnh bánh kem Ngọt Ngào',
        category: 2,
      },
      {
        id: 26,
        title: 'Bánh kem Tiramisu White',
        description:
          'Được phủ một kem tươi ngọt ngào cùng hương vị đặc trưng của socola và với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng.',
        price: 700,
        quality: 1,
        avatar: 'assets/imgs/25_Bánh kem Brodard - Tiramisu White.jpg',
        alt: 'Ảnh bánh kem Tiramisu White',
        category: 2,
      },
      {
        id: 27,
        title: 'Bánh kem Socola Love',
        description:
          'Được phủ một kem tươi mềm mịn cùng với sự tài hoa của những người thợ làm bánh tạo nên những bông hoa bằng kem thật đẹp và sang trọng. Bánh kem Brodard là một thương hiệu bánh danh tiếng của Sài Gòn với bề dày lịch sử hơn 60 năm. Mẫu bánh có thể được sử dụng trong tất cả các dịp chúc mừng.',
        price: 700,
        quality: 1,
        avatar: 'assets/imgs/26_Bánh kem Brodard - Socola Love.jpg',
        alt: 'Ảnh bánh kem Socola Love',
        category: 2,
      },
      {
        id: 28,
        title: 'Bánh dừa cuốn',
        description:
          'Bánh có mùi vị của dừa hòa quyện vào, làm tăng kích thích cho món bánh.',
        price: 15,
        quality: 1,
        avatar: 'assets/imgs/27_Bánh dừa cuốn.jpg',
        alt: 'Ảnh bánh dừa cuốn',
        category: 3,
      },
      {
        id: 29,
        title: 'Bánh Muffin Vanila',
        description: 'Dữ liệu đang được cập nhật...',
        price: 15,
        quality: 1,
        avatar: 'assets/imgs/28_Bánh Muffin Vanila.jpg',
        alt: 'Ảnh bánh Muffin Vanila',
        category: 3,
      },
      {
        id: 30,
        title: 'Bánh Chocolate',
        description: 'Dữ liệu đang được cập nhật...',
        price: 12,
        quality: 1,
        avatar: 'assets/imgs/29_Bánh Chocolate.jpg',
        alt: 'Ảnh bánh Chocolate',
        category: 3,
      },
      {
        id: 31,
        title: 'Bánh đỏ',
        description: 'Dữ liệu đang được cập nhật...',
        price: 10,
        quality: 1,
        avatar: 'assets/imgs/30_Bánh đỏ.jpg',
        alt: 'Ảnh Bánh đỏ',
        category: 3,
      },
      {
        id: 32,
        title: 'Bánh Donut Socola',
        description: 'Dữ liệu đang được cập nhật...',
        price: 8,
        quality: 1,
        avatar: 'assets/imgs/31_Bánh Donut Socola.jpg',
        alt: 'Ảnh Bánh Donut Socola',
        category: 3,
      },
      {
        id: 33,
        title: 'Bánh Dừa Xéo',
        description: 'Dữ liệu đang được cập nhật...',
        price: 10,
        quality: 1,
        avatar: 'assets/imgs/32_Bánh Dừa Xéo.jpg',
        alt: 'Ảnh Bánh Dừa Xéo',
        category: 3,
      }
    ]
    return {products}
  }

  getId(products: ProductsModules[]):number{
    return products.length > 0 ? Math.max(...products.map(products => products.id)) + 1:11;
  }

  constructor() { }
}
