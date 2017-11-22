angular.module('formDirective', [])
.directive('integer', function() { //整数验证 
    var INTEGER_REGEXP = /^\-?\d*$/;
    return {  
        require : 'ngModel',  
        link : function(scope, elm, attrs, ngModel) {  
            ngModel.$parsers.unshift((viewValue)=>{  //为parsers这个数组头部添加一个函数 
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
})


/*//定义父类Viewhttps://segmentfault.com/a/1190000004396187
class View {
  constructor(options) {
    this.model = options.model;
    this.template = options.template;
  }

  render() {
    return _.template(this.template, this.model.toObject());
  }
}
//实例化父类View
var view = new View({
  template: 'Hello, <%= name %>'
});
//定义子类LogView，继承父类View
class LogView extends View {
  render() {
    var compiled = super.render();
    console.log(compiled);
  }
}*/