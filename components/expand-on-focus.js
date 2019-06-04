function directive() {

    function link($scope, $element, $attrs){
        let height = 0;
            $element.on("focus", () => {
             $element.css("height", height + "px");
            });
            $element.on("blur", () => {
             $element.css("height", "");
            });

        $scope.$watch($attrs.count, function(value) {
        height = value;
        console.log(value);
        });
    }
        return {
            link: link,
            restrict: 'A',
            // scope: {count: "<"},
        }
    
}
    angular
        .module ('MyApp')
        .directive ('expandOnFocus', directive);