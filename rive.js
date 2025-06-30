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

const eventFire = (riveEvent) => {
	const eventData = riveEvent.data;
	const eventName = eventData.name;
	const eventProperties = eventData.properties;
	switch (eventName) {
		case "points":
			let rounder = Math.round(eventProperties.point);

			inputs = riveInstance.stateMachineInputs(stateMachine);
			pointer = inputs.find((i) => i.name === "Number");
			pointer.value = rounder;

			const text = (document.getElementById("point").textContent = rounder);
			break;
		// Change pointer when hovering action
		case "pointerIn":
			document.body.style.cursor = "pointer";
			break;
		case "pointerOut":
			document.body.style.cursor = "auto";
			break;
		default:
			console.log(eventName);
			break;
	}
};

// Register the event handler
riveInstance.on(rive.EventType.RiveEvent, eventFire);
