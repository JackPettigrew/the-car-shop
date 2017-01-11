//All the images of different heads.
var carImages = 
[
	"img/custom/white.png", 
	"img/custom/blue.png", 
	"img/custom/brown.png",
	"img/custom/lightblue.png",
	"img/custom/orange.png",
	"img/custom/pink.png",
	"img/custom/yellow.png"
];

//Each index for the head, torso and legs of this 'person'.
var carIndex

//Set them all to 0 initially.
carIndex = 0;

//The current head, torso and legs elements. We will change the image of these elements.
var carImage;

/**
 * Called when the page first loads.
*/
window.onload = function()
{
	//Get each element for the head, torso and legs.
	carImage  = document.getElementById("car-image");
	
	//Set images initially
	onCarChanged();
}

/**
 * Called when the head of the person is changed.
*/
function onCarChange(offset)
{
	//Find the index which is offset from the current head index by the given offset.
	var offsetIndex = (carIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		carIndex = carImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		carIndex = (carIndex + offset) % carImages.length;
	
	//Fire callback for when the body has changed
	onCarChanged();
}


/**
 * Called when the user has changed the body in some way by choosing a different head, torso, and legs.
*/
function onCarChanged()
{
	//Set head, torso and legs images
	carImage.src = carImages[carIndex];
}


/**
 * Saves the current selection of head, torso and legs to local storage for retrieval later.
*/
function addToCart()
{
	//code add to cart with selected colour
	localStorage.setItem("chosenCar" , carIndex);
	alert("Added to Cart!");	
}
