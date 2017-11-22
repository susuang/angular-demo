'use strict';
angular.module('formDirective', []).directive('integer', function () {
    //整数验证 
    var INTEGER_REGEXP = /^\-?\d*$/;
    return {
        require: 'ngModel',
        link: function link(scope, elm, attrs, ngModel) {
            ngModel.$parsers.unshift(function (viewValue) {
                //为parsers这个数组头部添加一个函数 
                if (INTEGER_REGEXP.test(viewValue)) {
                    ngModel.$setValidity('integer', true);
                    return viewValue;
                } else {
                    ngModel.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
    };
});
