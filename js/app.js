angular.module('App', [])
  .controller('MyController', ['$scope', function($scope) {
    console.log('App Started');
    console.log('Fruit count', fruits.length);
    console.log('Veggie count', vegetables.length);
    console.log('scope.pool: ', $scope.pool);
    $scope.fruits = [];
    $scope.vegetables = [];
    $scope.pool = shuffle(fruits.concat(vegetables));
    $scope.moveHorizontal = function(destination, index, current) {
      $scope[destination].push($scope[current][index]);
      $scope[current].splice(index, 1);
    };

    $scope.checkForWin = function() {
      var fruitCheck = compare($scope.fruits, fruits);
      var vegetableCheck = compare($scope.vegetables, vegetables);
      console.log('$scope.fruits: ', $scope.fruits);
      console.log('$scope.vegetables: ', $scope.vegetables);
      console.log('fruits ', fruits);
      console.log('vegetables ', vegetables);
      if ($scope.pool.length > 0) {
        alert('Sorry, you have not properly sorted all 3 columns yet');
      } else if (fruitCheck === true && vegetableCheck === true) {
        alert('Congratulations, you win');
      } else {
        alert('Nice try, but not quite');
      }
    };

  }]);

function compare(newArray, oldArray) {
  var key;
  var sortedNew = newArray.sort();
  var sortedOld = oldArray.sort();
  for (key in newArray) {
    if (sortedNew[key] !== sortedOld[key]) {
      // newArray[key].incorrect;
      console.log(key, newArray[key], 'was', oldArray[key]);
      return false;
    } else {
      return true;
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
