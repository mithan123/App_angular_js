var mywebsite = angular.module("mywebsite", []);

mywebsite.controller('headerController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Navbar Controller");
    }
});

mywebsite.controller('firstsectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("First Section Controller");
    }
});

mywebsite.controller('secondsectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Second Section Controller")
    }
});

mywebsite.controller('thirdsectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Third Section Controller");
    }
});

mywebsite.controller('foursectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Fourth Section Controller");
    }
});

mywebsite.controller('fivesectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Fifth Controller");
    }
});
mywebsite.controller('sixsectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Sixth Controller");
    }
});
mywebsite.controller('sevensectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Seventh Controller");
    }
});
mywebsite.controller('eightsectionController', function($scope){
    $scope.printOnConsole = function(){
        console.log("Eight Controller");
    }
});