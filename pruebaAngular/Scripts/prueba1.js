var aplicacion1 = angular.module('aplicacion1', []);

aplicacion1.controller("inicializador", function ($scope) {
    $scope.primer = 1;
    $scope.segundo = 1;
    $scope.calculoSuma = 0;
    $scope.calculoResta = 0;
    $scope.ciudades = [{ "nombre": "mexico" }, { "nombre": "durango" }, { "nombre": "sinaloa" }];
});

aplicacion1.controller("controlador1", function ($scope) {
    $scope.sumarValores = function () {
        $scope.calculoSuma = parseInt($scope.primer) + parseInt($scope.segundo);
    }
});

aplicacion1.controller("controlador2", function ($scope) {
    $scope.restarValores = function () {
        $scope.calculoResta = parseInt($scope.primer) - parseInt($scope.segundo);
    }
});

aplicacion1.controller("controladorListas", function ($scope) {
    $scope.obtenerLista = function () {
        return ($scope.mostrarListaOrdenada) ? "listaCiudadesOrdenada.html" :"listaCiudadesDesordenada.html" ;
    }
});

aplicacion1.controller("controladorFuncionesExternas", function ($scope) {
    $scope.primerDato = "miguel";
    $scope.segundoDato = 5;
    $scope.procesadoPrimerDato = procesarPrimerDato($scope.primerDato);
    $scope.procesadoSegundoDato = procesarSegundoDato($scope.segundoDato);
});

aplicacion1.controller("controladorEventoSaludo", function ($scope) {
    $scope.mostrarSaludoMananero = false;
});

aplicacion1.controller("controladorSelect", function ($scope) {
    $scope.sexo = "";
});