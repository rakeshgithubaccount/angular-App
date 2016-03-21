myapp.directive("numericonly", function() {
  return {
    restrict: "A",
    link: function($scope,elem,attrs){
     elem.on("keypress", function(e){
        if(e.which < 48 || e.which > 57){
            e.preventDefault();
        } 
     });
    }
  }
});

myapp.directive("charactersonly", function() {
  return {
    restrict: "A",
    link: function($scope,elem,attrs){
     elem.on("keypress", function(e){
        // console.log(e.which)
        if((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122)){}
        else{e.preventDefault();}
        });
     }
    }
  });