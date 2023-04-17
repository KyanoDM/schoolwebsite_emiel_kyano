const studierichtingenContainer = document.getElementById("studierichtingen");

fetch("studierichtingen.json")
	.then(response => response.json())
	.then(studierichtingen => {
		studierichtingen.forEach(studierichting => {
			const studierichtingElement = document.createElement("div");
			studierichtingElement.classList.add("studierichting");
			studierichtingElement.innerHTML = `
				<img src="${studierichting.afbeelding}">
				<h2>${studierichting.naam}</h2>
				<p>${studierichting.beschrijving}</p>
			`;
			studierichtingenContainer.appendChild(studierichtingElement);
		});
	});
    