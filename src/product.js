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
    constructor(name, price, isbn, minDuration, maxDuration){
      super(name, price);
      this.isbn = isbn;
      this.minDuration;
      this.maxDuration;
      function getDuration() {
        this.toString = function() {
          var durationmin = this.minDuration;
          var durationmax = this.maxDuration;
          return super.toString() + ' duration between ${durationmin} and ${durationmax}';
        }
      }
  }
};

class DVD extends Product {
    constructor(name, price, moovie, runningTime){
      super(name, price);
      this.moovie = moovie;
      this.runningTime;
      function getDuration() {
        this.toString = function() {
          var runningTime = this.runningTime;
          return super.toString() + ' duration: ${runningTime}';
        }
      }
  }
};

class VideoGame extends Product {
    constructor(name, price, platform, minDuration, maxDuration){
      super(name, price, duration);
      this.platform = platform;
      this.minDuration;
      this.maxDuration;
      function getDuration() {
        this.toString = function() {
          var durationmin = this.minDuration;
          var durationmax = this.maxDuration;
          return super.toString() + ' duration between ${durationmin} and ${durationmax}';
        }
      }
  }
};

module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame:VideoGame
};