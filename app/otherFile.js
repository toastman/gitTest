(function() {
  'use strict';

  angular
    .module('module')
    .controller('MyController2', MyController2);

  MyController2.$inject = ['dependencies'];

  /* @ngInject */
  function MyController2(dependencies) {
    var vm = this;
    vm.title = 'MyController2';

    activate();

    ////////////////

    function activate() {
    }
  }
})();
