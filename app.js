var app = angular.module("trelloApp", []);
app.controller("trelloController", function($scope) {
  $scope.nombre = "Linda Luna";
  $scope.nuevaTarea = [];
  $scope.nuevoTitulo = [];
  $scope.nuevaAct = {};

  $scope.toDo = [
    {
      titulo: [],
      tarjeta: []
    }
  ];

  $scope.agregarTitulo = function() {
    $scope.toDo.push({ titulo: $scope.nuevoTitulo });
    $scope.nuevoTitulo = [];
    console.log($scope.toDo);
  };

  // $scope.agregarTarea = function() {
  //     $scope.toDo.tarjeta.push($scope.nuevaTarea);
  //     $scope.nuevaTarea = [];
  //   };
});

// window.onload = () => {
//   drawInputFirst();
// };

// function drawInputFirst() {
//   homeworkDiv.innerHTML = `<input class="form-control form-control-lg" type="text" placeholder="+ Añada una lista" id="plusWork" onclick="drawAddList()">`;
// }

// function drawAddList() {
//   homeworkDiv2.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body"><h5 class = "card-title" > <input class="form-control form-control-lg plusWork" type="text" placeholder="Introduzca el título de la lista..." name="plusWorkBefore"> <a href = "#" class = "btn btn-primary listBtn" onclick="drawCard()"> Añadir Lista</a></div></div>`;
// }

// function drawCard() {
//   titleList = document.getElementsByName("plusWorkBefore")[0].value;
//   homeworkDiv2.innerHTML = `<div class="card" style="width: 18rem;"> <div class = "card-body" id="listAdded"><h5 class = "card-title">${titleList}</h5><a href="#" class="list-group-item list-group-item-light" id="addCard" onclick="handlerDrawCard()">+ Añade una tarjeta</a>`;
// }
