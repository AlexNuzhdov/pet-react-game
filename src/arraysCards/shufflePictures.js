export function shufflePictures(arr) {
	const myArray = arr.map(obj => ({ ...obj, rotated: false, opacity: 1 }));
	for (let i = myArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return myArray
}




