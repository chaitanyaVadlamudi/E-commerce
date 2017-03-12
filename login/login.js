(function(){
    function loginCtrl($scope,$state){
       $scope.login = function () {
            $state.go("products");
        }
      $scope.signup = function () {
            $state.go("register");
        }
    }
    angular.module("login",[]);
    angular.module("login")
           .controller("loginCtrl",["$scope","$state",loginCtrl])
})();