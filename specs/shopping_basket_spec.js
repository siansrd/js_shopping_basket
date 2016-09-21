var shoppingBasket = require('../shopping_basket');
var basket = shoppingBasket.basket;
var item1 = shoppingBasket.item1;
var item2 = shoppingBasket.item2;
var item3 = shoppingBasket.item3;

var assert = require( 'assert' );

describe ( 'Shopping Basket', function() {

  beforeEach(function() {
    basket.empty();
  })

  it("can add item", function() {
    basket.add(item1);
    assert.equal("Shoes", basket.items[0].name);
  });

  it("can remove item", function() {
    basket.add(item1);
    basket.add(item2);
    basket.remove("Tape");
    assert.equal(1, basket.items.length);
  });

  it("can total items", function() {
    basket.add(item1);
    basket.add(item2);
    assert.equal(60.00, basket.total());
  });

  it("can discount over 20", function() {
    basket.add(item1);
    basket.add(item2);
    assert.equal(54.00, basket.discount10());
  });

  it("check loyalty", function() {
    assert.equal(true, basket.loyalty);
  })

  it("can loyalty discount", function() {
    basket.add(item1);
    basket.add(item2);
    assert.equal(57, basket.discountLoyalty());
  })

  it("can bogoff", function() {
    basket.add(item1);
    basket.add(item2);
    basket.add(item3);
    assert.equal(65.00, basket.bogoff());
  })

  

});