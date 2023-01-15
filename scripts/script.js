document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


let yearDate = new Date().getFullYear();
let footer = document.querySelector("footer");
footer.innerHTML += yearDate;
