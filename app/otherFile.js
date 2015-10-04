(function() {
  'use strict';

  angular
    .module('module')
<<<<<<< HEAD
    .controller('MyController2', MyController2);

  MyController2.$inject = ['dependencies'];

  /* @ngInject */
  function MyController2(dependencies) {
    var vm = this;
    vm.title = 'MyController2';
=======
    .MyController('MyController', MyController);

  MyController.$inject = ['dependencies'];

  /* @ngInject */
  function MyController(dependencies) {
    var vm = this;
    vm.title = 'MyController';
>>>>>>> 163149d... Made some changes

    activate();

    ////////////////

    function activate() {
    }
  }
})();
