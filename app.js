function AppCtrl($scope) {
  $scope.activeTab = 'stream';

  $scope.tab = function (tabType) {
    $scope.activeTab = tabType;
  };

  $scope.streamItems = [{
    name: 'Spectacles'
  },
  {
    name: 'Giraffe'
  },
  {
    name: 'Turtle'
  },
  {
    name: 'Shark'
  },
  {
    name: 'Lamp'
  },
  {
    name: 'Chocolate'
  },
  {
    name: 'Beef'
  },
  {
    name: 'Drawer'
  },
  {
    name: 'Brocolli'
  },
  {
    name: 'Tomato'
  },
  {
    name: 'Plate'
  },
  {
    name: 'Zebra'
  }];
}