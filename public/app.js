 angular.module('stringClass', ['ui.materialize'])
  .controller('stringController', ['$scope', ($scope) => {
    $scope.formdata = '';
    $scope.HideDiv = true;
    $scope.choices = [
      'hasVowels',
      'toUpper',
      'toLower',
      'ucFirst',
      'isQuestion',
      'words',
      'wordCount',
      'toCurrency',
      'fromCurrency',
      'inverseCase',
      'alternatingCase',
      'getMiddle',
      'numberWords',
      'isDigit'
    ];
  }]);
  