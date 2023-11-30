var phonecatApp = angular.module("reactToAngularJsApp", []).controller("mainController", function ($scope, $http) {
  // List rendering example
  $scope.planets = [
    { id: 1, name: "Mercury" },
    { id: 2, name: "Venus" },
    { id: 3, name: "Earth" },
    { id: 4, name: "Mars" },
    { id: 5, name: "Jupiter" },
    { id: 6, name: "Saturn" },
    { id: 7, name: "Uranus" },
    { id: 8, name: "Neptune" },
  ];
  $scope.formFields = [
    { id: 1, label: "Name", type: "text" },
    { id: 2, label: "Email", type: "email" },
    { id: 3, label: "Password", type: "password" },
  ];
  $scope.userData = {
    username: null,
    password: null,
  };
  $scope.simpleOnClick = function () {
    alert("simple on click esemény");
  };
  $scope.$on("$viewContentLoaded", function () {
    Prism.highlightAll();
  });
  $scope.thisIsNotvisible = false;
  $scope.thisIsVisible = true;
  $scope.themeVariable = "blue";
  $scope.jsonData = null;
  $scope.fetchData = function () {
    $http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(function (response) {
        $scope.jsonData = response.data;
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  };
  $scope.count = 0;
  $scope.increment = function () {
    $scope.count++;
  };
  $scope.decrement = function () {
    $scope.count--;
  };
  $scope.todos = [
    { id: 1, text: "Első" },
    { id: 2, text: "Második" },
    { id: 3, text: "Harmadik" },
  ];

  $scope.addTodo = function () {
    if ($scope.newTodo.trim() !== "") {
      $scope.todos.push({ id: Date.now(), text: $scope.newTodo });
      $scope.newTodo = "";
    }
  };

  $scope.removeTodo = function (id) {
    $scope.todos = $scope.todos.filter((todo) => todo.id !== id);
  };

  $scope.input = "";
  $scope.result = "";

  $scope.handleButtonClick = function (value) {
    $scope.input += value;
  };

  $scope.handleCalculate = function () {
    try {
      console.log("$scope.input");
      console.log($scope.input);
      $scope.result = eval($scope.input).toString();
      console.log($scope.result);
    } catch (error) {
      $scope.result = "Error";
    }
  };

  $scope.handleClear = function () {
    $scope.input = "";
    $scope.result = "";
  };


  $scope.options = ['Rock', 'Paper', 'Scissors'];
  $scope.userChoice = '';
  $scope.computerChoice = '';
  $scope.gameResult = '';

  $scope.handleUserChoice = function (choice) {
  const computerRandomChoice = $scope.options[Math.floor(Math.random() * $scope.options.length)];
  $scope.userChoice = choice;
  $scope.computerChoice = computerRandomChoice;
  $scope.calculateResult(choice, computerRandomChoice);
  };

  $scope.calculateResult = function (user, computer) {
  if (user === computer) {
      $scope.gameResult = 'Döntetlen!';
  } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
  ) {
      $scope.gameResult = 'Te nyertél!';
  } else {
      $scope.gameResult = 'A gép nyert!';
  }
  };

});
