var chalk = require('chalk');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.toString = function(currency, rateCurrency) {
      var currency = currency || '$';
      var rateCurrency = rateCurrency || 1;
      var chy = chalk.yellow(this.name);
      var chr = chalk.red(this.price * rateCurrency)
      return '${chy} cost ${chr} ${currency}';
    }
  }
};

class Book extends Product {
    constructor(name, price, isbn){
      super(name, price);
      this.isbn = isbn;
  }
};

class DVD extends Product {
    constructor(name, price, moovie){
      super(name, price);
      this.moovie = moovie;
  }
};

class VideoGame extends Product {
    constructor(name, price, platform){
      super(name, price);
      this.platform = platform;
  }
};

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame:VideoGame
};