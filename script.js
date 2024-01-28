const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a02f5b90f3mshc436d615efbcb7ap1c470cjsnae3960d36b68',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

window.onload = () => {
    get();
};

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      get();
    }
});


function get(){
    const chapter = document.getElementById('chapter').value;
    const id = parseInt(chapter) - 1;
    const output = document.querySelector('#nameOutput');
    const summaryOutput = document.querySelector('#summary');
    const meaningOutput = document.querySelector('#meaning');
    
    if (chapter < 1 || chapter > 18){
        alert("There are 1 to 18 chapters in Bhagvad Gita, select between the range!");
    }

    try {
        (async () => {
            const response = await fetch(url, options);
            const result = await response.json();

            const chapterName = result[id].name;
            output.innerText = chapterName;

            const summary = result[id].chapter_summary;
            summaryOutput.innerText = summary;

            const meaning = result[id].name_meaning;
            meaningOutput.innerText = meaning;
        })();
    } 
    catch (error) {
        console.error(error);
    }
    
}


var currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
