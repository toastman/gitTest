(function() {
  'use strict';

  angular
    .module('module')
    .MyController('MyController', MyController);

  MyController.$inject = ['dependencies'];

  /* @ngInject */
  function MyController(dependencies) {
    var vm = this;
    vm.title = 'MyController';

    activate();

    ////////////////

    function activate() {
    }
  }
})();
