import img1 from "../assets/pictures/img1.png"
import img2 from "../assets/pictures/img2.png"
import img3 from "../assets/pictures/img3.png"


export const pictures = [
	{ src: img1, alt: "Picture1" },
	{ src: img2, alt: "Picture2" },
	{ src: img1, alt: "Picture4" },
	{ src: img3, alt: "Picture3" },
	{ src: img2, alt: "Picture5" },
	{ src: img3, alt: "Picture6" },
];

export function shufflePictures() {
	const myArray = pictures.map(obj => ({ ...obj, rotated: false, opacity: 1 }));
	for (let i = myArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[pictures[i], pictures[j]] = [pictures[j], pictures[i]];
	}
	return myArray
}




