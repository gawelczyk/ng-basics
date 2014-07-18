MyApp.controller("PeopleListCtrl", [
    "$scope",
    "peopleSearchSrv",
    function ($scope, peopleSearchSrv) {
        $scope.people = peopleSearchSrv.findAll();

        $scope.newPerson = {name: '', age: ''};

        $scope.greetWith = function (person) {
            log("Hi " + person.name + "!");
        };

        $scope.createNew = function () {
            $scope.people.push({name: $scope.newPerson.name, age: $scope.newPerson.age});
            $scope.newPerson = {name: '', age: ''};
        };

        $scope.clearAll = function () {
            $scope.people = [];
        };

        var move = function (array, el, step) {
            var index = array.indexOf(el);
            var newIndex = index + step;
            if (newIndex < 0) {
                newIndex = array.length - 1;
            }
            if (newIndex > array.length - 1) {
                newIndex = 0;
            }
            var el1 = $scope.people[index];
            var el2 = $scope.people[newIndex];
            $scope.people[newIndex] = el1;
            $scope.people[index] = el2;
        }

        $scope.moveUp = function (person) {
            move($scope.people, person, -1);
        };

        $scope.moveDown = function (person) {
            move($scope.people, person, 1);
        };

    }
]);
