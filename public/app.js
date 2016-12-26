 angular.module('stringClass', ['ui.materialize'])
  .controller('stringController', ['$scope', ($scope) => {
    $scope.formdata = '';
    $scope.HideDiv = true;
    $scope.choices = ['hasVowels', 'toUpper', 'toLower', 'ucFirst', 'isQuestion', 'removeSpace','words', 'wordCount', 'toCurrency', 'fromCurrency', 'inverseCase', 'alternatingCase', 'getMiddle', 'numberWords', 'isDigit'];
    $scope.submit = () => {
      switch($scope.value) {
        case 'hasVowels' :
          $scope.formdata = $scope.query.hasVowels();
          break;
        case 'toUpper' :
          $scope.formdata = $scope.query.toUpper();
          break;
        case 'toLower' :
          $scope.formdata = $scope.query.toLower();
          break;
        case 'ucFirst' :
          $scope.formdata = $scope.query.ucFirst();
          break;
        case 'isQuestion' :
          $scope.formdata = $scope.query.isQuestion();
          break;
        case 'removeSpace' :
          $scope.formdata = $scope.query.removeSpace();
          break;
        case 'words' :
          $scope.formdata = $scope.query.words();
          break;
        case 'wordCount' :
          $scope.formdata = $scope.query.wordCount();
          break;
        case 'toCurrency' :
          $scope.formdata = $scope.query.toCurrency();
          break;
        case 'fromCurrency' :
          $scope.formdata = $scope.query.fromCurrency();
          break;
        case 'inverseCase' :
          $scope.formdata = $scope.query.inverseCase();
          break;
        case 'alternatingCase' :
          $scope.formdata = $scope.query.alternatingCase();
          break;
        case 'getMiddle' :
          $scope.formdata = $scope.query.getMiddle();
          break;
        case 'numberWords' :
          $scope.formdata = $scope.query.numberWords();
          break;
        case 'isDigit' :
          $scope.formdata = $scope.query.isDigit();
          break;
        default: 
          console.log('bad');
          break;
      }
    }
  }]);