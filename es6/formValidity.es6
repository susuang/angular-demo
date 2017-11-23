angular.module('formDirective', [])
/***************数字验证***********************/
/**正则表达式
 * 
 */

.directive('integer', function() { //整数验证 
    let rule = /^\-?\d*$/;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
                console.info(viewValue);
                if (rule.test(viewValue)) {  
                    console.info(1); 
                    ngModel.$setValidity('integer', true);  
                    return viewValue;  
                } else {  
                    console.info(2);
                    ngModel.$setValidity('integer', false);  
                    return undefined;  
                }  
            });  
        }  
    };  
})
//浮点数验证 
.directive('float', function() { 
    let rule = /^(-?\d+)(\.\d+)?$/;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
                if (rule.test(viewValue) || !viewValue) {   
                    ngModel.$setValidity('float', true);  
                    return viewValue;  
                } else {  
                    ngModel.$setValidity('float', false);  
                    return undefined;  
                }  
            });  
        }  
    };  
})
//既验证手机号，又验证座机号
.directive('telephone', function() { 
    let rule = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\d3)|(\d{3}\-))?(1[358]\d{9})$)/;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
                if (rule.test(viewValue)) {   
                    ngModel.$setValidity('telephone', true);  
                    return viewValue;  
                } else {  
                    ngModel.$setValidity('telephone', false);  
                    return undefined;  
                }  
            });  
        }  
   
    };  
})
//验证手机号
.directive('mobilePhone', function() { 
    let rule = /^1[3-8]+\d{9}$/;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
                if (rule.test(viewValue)) {   
                    ngModel.$setValidity('mobilePhone', true);  
                    return viewValue;  
                } else {  
                    ngModel.$setValidity('mobilePhone', false);  
                    return undefined;  
                }  
            });  
        }  
    };  
})
//验证身份证
.directive('idcard', function() {  
    let rule = /^\d{15}|\d{}18$/;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
                if (rule.test(viewValue)) {   
                    ngModel.$setValidity('idcard', true);  
                    return viewValue;  
                } else {  
                    ngModel.$setValidity('idcard', false);  
                    return undefined;  
                }  
            });  
        }  
    };  
})
//验证邮政编码 
.directive('zip', function() {   
    let rule = /^[1-9]\d{5}$/i;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
                if (rule.test(viewValue)) {   
                    ngModel.$setValidity('zip', true);  
                    return viewValue;  
                } else {  
                    ngModel.$setValidity('zip', false);  
                    return undefined;  
                }  
            });  
        }  
    };  
});
