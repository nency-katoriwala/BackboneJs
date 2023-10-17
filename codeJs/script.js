let MyModel = Backbone.Model.extend(); 

let make_model = new MyModel({
    name: "Nency katoriwala",
    team: "Wordpress",
    position: "Developer",
});

let make_model_obj2 = make_model.clone();

let MakeView = Backbone.View.extend({
    model:make_model_obj2,
    initialize: function(){
          this.render();
       },
       render: function(){
           console.log('View Created...');
           console.log(this.model.toJSON());

          

           /*if(this.model.hasChanged()){
              console.log("changed");
              console.log(this.model.changedAttributes());
              console.log(this.model.previous("name"));
              console.log(this.model.previousAttributes());
           }else{
             console.log("not changed");
           }*/

           this.listenTo(this.model, "change", this.ModelChanged);

           this.model.set('name','Priya Shrma');
       },
       ModelChanged: function(){
        
          if(this.model.hasChanged()){
              console.log("changed");
              console.log(this.model.changedAttributes());
              console.log(this.model.previous("name"));
              console.log(this.model.previousAttributes());
           }else{
             console.log("not changed");
           }

      },
 });

 
 let make_view = new MakeView();