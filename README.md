# popup

### Simple toast library 

#### Installation Instructions

..* include jquery in html
..* include popup.css in the head of the html
..* include popup.js after the jquery and before your scripts

#### Usage
 
##### Call Show method of $popup and pass your settings used.

```js
	$popup.show({
		msg: "Hello from msg",  //required
		width: 500,  //optional should be a number
		height:200,  //optional should be a number
		position: 'top-right', //optional, other options are(top-left,bottom-right,bottom-left)
		type: 'success', //optional, other options are(warning,info,error)
		animate: 'fade', //optional, other options are(slide)
		time: 5000, // optional, will decide how much time in ms will the popup stay
		sticky: true // optional, if true, popup will not close automatically , if false popup will close after specified time
	});
``` 
Any fixes and suggestions would be very helpful. **Thanks**