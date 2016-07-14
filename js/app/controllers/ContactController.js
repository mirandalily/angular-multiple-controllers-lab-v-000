function ContactController() {
  this.name = 'Winnie The Pooh';
  this.email = 'poohbear@hundredacrewoods.com';
  this.phone = '1-234-5678';

  var vm = this

  this.changeName = function() {
    vm.name = 'Pooh Bear';
  }
}


angular
  .module('app')
  .controller('ContactController', ContactController);
