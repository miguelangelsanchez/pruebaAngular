var moduloListaProductos = angular.module('moduloListaProductos', []);

moduloListaProductos.controller("inicializadorListaProductos", function ($scope) {
    $scope.listaProductos = [{ "nombre": "figura accion batman", "precio": 100.50 }, { "nombre": "espada augurio", "precio": 50.50 }, , { "nombre": "yo-yo", "precio": 10.50 }];
});

moduloListaProductos.controller("controladorListaProductos", function ($scope) {
    $scope.agregarProducto = function () {
        $scope.listaProductos.push({ "nombre": $scope.nombreNuevoProducto, "precio": 50.50 });
    }
});

moduloListaProductos.controller("controladorFormulario", function ($scope) {
    $scope.usuarios = [{
        primerNombre: "Miguel",
        segundoNombre: "Sanchez",
        subscribir: "subscribir",
        metodoEntrega:"telefono"
    }];

    $scope.guardarUsuario = function (informacionUsuario) {
        if ($scope.formularioUsuario.$valid) {
            $scope.usuarios.push({
                primerNombre: informacionUsuario.primerNombre,
                segundoNombre: informacionUsuario.segundoNombre,
                subscribir: informacionUsuario.subscribir,
                metodoEntrega: informacionUsuario.metodoEntrega
            });
        }
    }
});

moduloListaProductos.controller("controladorHeroes", function ($scope) {
    $scope.heroes = [
        { nombreHeroe: "Batman", nombreReal: "Bruno Diaz" },
        { nombreHeroe: "Superman", nombreReal: "Clark Kent" }
    ];

    $scope.obtenerDatosHeroe = function () {
        buscarHeroe($scope.nombreHeroeBuscar);
    };

    function buscarHeroe(nombre) {
        $scope.datosHeroe = "No encontrado";
        for (var indice = 0; indice < $scope.heroes.length; indice++)
            if ($scope.heroes[indice].nombreHeroe === nombre)
                $scope.datosHeroe = $scope.heroes[indice].nombreHeroe + " es " + $scope.heroes[indice].nombreReal;
    }

    $scope.$on("heroeActualizado", function (evento, argumentos) {
        $scope.heroes.push({ nombreHeroe: argumentos.nombreHeroe, nombreReal: argumentos.nombreReal});
    });

    $scope.agregarDatosHeroe = function (nombreReal, nombreHeroe) {
        $scope.$broadcast("heroeActualizado", { nombreReal: nombreReal, nombreHeroe: nombreHeroe });
    };

});