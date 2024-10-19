
 const token = "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"
 const inputTxt = document.getElementById("input")
 const image = document.getElementById("image")
 const button = document.getElementById("btn")

async function query() {
    image.src = "images/loading.gif"; 
	const response = await fetch(
		"https://api-inference.huggingface.co/models/kothariyashhh/GenAi-Texttoimage",
		{
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}

 button.addEventListener('click', async function () {
    query().then((response) => {
        const objectURL = URL.createObjectURL(response)
         image.src = objectURL
 });
})