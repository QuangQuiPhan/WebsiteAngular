$(document).ready(function () {
    $("div.card__detail__description").hide();
    $("div.card__detail__price").hide();
    $("div.card__detail__cart").hide();
    //$("div.card__detail__cart").hide();
    $("div.card__detail").hover(function () {
            // over
            $("div.card__detail__description").show();
            $("div.card__detail__price").show();
            $("div.card__detail__cart").show();
        }, function () {
            // out
            $("div.card__detail__description").hide();
            $("div.card__detail__price").hide();
            $("div.card__detail__cart").hide();
        }
    );

    $(".product__submenu").hide();
    $(".navbar__left__item:nth-child(2)").hover(function () {
            // over
            $(".product__submenu").show();
        }, function () {
            // out
            $(".product__submenu").hide();
        }
    );
});