var item1 = {
  name: "Shoes",
  price: 55.00,
  bogoff: false
};
module.exports.item1 = item1;

var item2 = {
  name: "Tape",
  price: 5.00,
  bogoff: true
}
module.exports.item2 = item2;

var item3 = {
  name: "DVD",
  price: 10.00,
  bogoff: true
}
module.exports.item3 = item3;

var basket = {
  items: [],
  add: function(item) {
    this.items.push(item);
  },
  remove: function(nameOfItem) {
    var length = this.items.length;
    for (var i = 0; i < length; i++) {
      if (this.items[i].name === nameOfItem) {
        this.items.splice(i,1);
        return;
      }
    }
  },
  empty: function() {
    this.items = [];
  },
  total: function() {
    var total = 0;
    for ( var i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  },
  discount10: function() {
    var total = this.total();
    if (total > 20.00) {
      return total = total * 0.90;
    } else {
      return basket.total();
    }
  },
  loyalty: true,
  discountLoyalty: function() {
    if (basket.loyalty == true) {
      var total = this.total();
      return total = total * 0.95;
    } else {
      return basket.total();
    }
  },
  bogoff: function() {
    var bogoffPrices = [];

    for ( var i = 0; i < this.items.length; i++) {
      if (this.items[i].bogoff == true) {
        bogoffPrices.push(this.items[i].price);
      }

      bogoffPrices.sort();
      var half = bogoffPrices.length / 2;
      bogoffPrices.splice(0, half);

      var bogoffTotal = 0;
      for ( var i = 0; i < bogoffPrices.length; i++) {
        bogoffTotal += bogoffPrices[i].price;
      }
      return bogoffTotal;
    }
  }
}
module.exports.basket = basket;



