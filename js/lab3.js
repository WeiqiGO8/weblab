// ! Lab 3 task 1
const source =
	"https://gist.githubusercontent.com/mapoto/515827c73f7f60a14cf2914f0cca16f0/raw/c41bc850bc989cadf6a1caa394ab12fce105d59e/countries.json";

fetch(source)
	.then((response) => response.json())
	.then((data) => {
		data.forEach((element) => console.log(element));
	})
	.catch((error) => console.log(error));

// ! Lab 3 task 2
const imageUrl = "https://avatars.githubusercontent.com/u/38219434?v=4";
const imgElement = document.getElementById("fetchedImage");

fetch(imageUrl)
	.then((response) => response.blob())
	.then((blob) => {
		let imgURL = URL.createObjectURL(blob);
		imgElement.src = imgURL;
	})
	.catch((error) => console.log("Error fetching image:", error));
