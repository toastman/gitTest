(function() {
  'use strict';

  angular
    .module('module')
    .directive('myDirective', myDirective);

  myDirective.$inject = ['dependencies'];

  /* @ngInject */
  function myDirective(dependencies) {
    // Usage:
    //
    // Creates:
    //
    var myDirective = {
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: {
      }
    };
    return myDirective;

    function link(scope, element, attrs) {
    }
  }

  /* @ngInject */
  function Controller() {

  }
})();
