let yearDate = new Date().getFullYear();
let footer = document.querySelector("#date");
footer.innerHTML += yearDate;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;


