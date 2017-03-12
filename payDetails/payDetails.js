(function(){
    function payDetailsCtrl($scope,$stateParams){
         var payPal = JSON.parse($stateParams.payment);
        $scope.finalCart = payPal;
        console.log("pay "+ JSON.stringify($stateParams));
        /*$scope.backToCart = function(){
            $state.go("cartDetails");
        }*/
        $scope.proceedPayment = function(){
            $scope.proceedPay = !$scope.proceedPay;
        };
        $scope.creditCard = function(){
            $scope.card = !$scope.card;
        };
        $scope.COD = function(){
            $scope.cash = !$scope.cash;
        };
        $scope.confirmOrder = function(){
            window.alert("efrgtr");
        };
    }
    angular.module("payDetails",[]);
    angular.module("payDetails")
        .controller("payDetailsCtrl",["$scope","$stateParams",payDetailsCtrl])
})();