var propertyArray = [];

$(document).ready(function(){
	$("#generator").on('click',function(){
		addProperty();
	});

	$("#houseContainer").on('click','#delete',function(){
		deleteProperty(this);
	});
});


function property(){
	this.propId = Math.floor((Math.random() * 2000) + 1); //random number between one and two thousand
	this.squareFoot = Math.floor((Math.random() * 4000) + 1); //random number between one and four thousand
	this.pricePer = Math.floor((Math.random() * 25) + 1); //random number between one and 25
}

function addProperty() {
	var house = new property();
	console.log(house);
	propertyArray.push(house);
	addToDom(house);
}

function addToDom(house){
	$("#houseContainer").append("<div class='house' data-prop= '" + house.propId + "'></div>");
	var $el = $("#houseContainer").children().last();
	$el.append("<p>Property ID: " + house.propId + "</p>");
	$el.append("<p>" + house.squareFoot + " Sq. Ft.</p>");
	$el.append("<p>$" + house.pricePer + "/ Sq. Ft.</p>");
	$el.append("<button id='delete'>Remove</button>");

	$el.hide().slideDown(1000);
	
}

function deleteProperty(context){
	var $parent = $(context).parent();
	for(var i=0; i<propertyArray.length; i++){
		if(propertyArray[i].propId==$parent.data("prop")){
			propertyArray.splice(i,1);
			// $parent.remove();
			$parent.slideUp(1000);
			$parent.delay(1000, function(){
				this.remove();
			});
		}
	}
	console.log(propertyArray);
}
