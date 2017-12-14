/**
 * Created by Asus on 12/14/2017.
 */
app.controller('HomeCtrl',  function ($scope, ADDRESS_BACKEND,Factory) {
    function init() {
        $scope.images = [{
            small: 'images/test_image.jpg',
            big: 'images/test_image.jpg'
        }, {
            small: 'images/img_fjords.jpg',
            big: 'images/img_fjords.jpg'
        }];

        $scope.currentIndex = 1;
        $scope.total = $scope.images.length;


        var wrapper = $('#image-gallery-2');
        $scope.viewer = ImageViewer(wrapper.find('.image-container'));
        $scope.showImage();
    }

    $scope.previousImage = function () {
        $scope.currentIndex--;
        if ($scope.currentIndex < 0) $scope.currentIndex = $scope.total;
        $scope.showImage();
    };
    $scope.nextImage = function () {
        $scope.currentIndex++;
        if ($scope.currentIndex > $scope.total) $scope.currentIndex = 1;
        $scope.showImage();
    }
    $scope.showImage = function () {
        var imgObj = $scope.images[$scope.currentIndex - 1];
        $scope.viewer.load(imgObj.small, imgObj.big);
    }
    function loadAllImage() {
        Factory.doGet(
            {category: 'image'},
            function (data) {
                $scope.images = data.list;
            }, function (data) {
                $scope.images = [{
                    small: 'images/test_image.jpg',
                    big: 'images/test_image.jpg'
                }, {
                    small: 'images/img_fjords.jpg',
                    big: 'images/img_fjords.jpg'
                }];
            }
        )
    }

    init();
})