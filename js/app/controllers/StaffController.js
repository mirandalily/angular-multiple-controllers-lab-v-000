function StaffController() {
  this.name = 'Piglet';
  this.email = 'piglet@hundredacrewoods.com';
  this.phone = '1-222-3333';
}


angular
  .module('app')
  .controller('StaffController', StaffController);
