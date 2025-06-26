const stateMachine = "State Machine 1";

const riveInstance = new rive.Rive({
	src: "the_arcane-jauge.riv", //get rive file
	canvas: document.getElementById("rive"), //get correct canvas
	autoplay: true,
	stateMachines: stateMachine, // get correct stateMachine
	automaticallyHandleEvents: true, // Automatically handle RiveHTTPEvents
	onLoad: onLoadHandler,
});

// Resize the drawing surface if the window resizes
window.addEventListener(
	"resize",
	() => {
		riveInstance.resizeDrawingSurfaceToCanvas();
	},
	false
);
// Handle the onLoad event
function onLoadHandler() {
	// Prevent a blurry canvas by using the device pixel ratio
	riveInstance.resizeDrawingSurfaceToCanvas();
}

function onLoadHandler() {}

const eventFire = (riveEvent) => {};
// Register the event handler
riveInstance.on(rive.EventType.RiveEvent, eventFire);

function pointSetter(getInput) {
	inputs = riveInstance.stateMachineInputs(stateMachine);
	pointer = inputs.find((i) => i.name === "Number");
	return (pointer.value = getInput);
}
