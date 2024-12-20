let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let response = document.querySelector('#response');

const url = 'https://api.datamuse.com/words?sl=';

const suggestions = () => {
    const word = input.value;
    const newUrl = `${url}${word}`;

    fetch(newUrl, {mode: "no-cors"}).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`HTTP error! status: ${response.status}`);
}, networkError => console.log(networkError.message))
.then(jsonResponse => {renderResponse(jsonResponse)})};

const displaySuggestions = (event) => {
    event.preventDefault();
    while (response.firstChild) {
        response.removeChild(response.firstChild)
    }
    suggestions();
};

submit.addEventListener('click', displaySuggestions);
console.log(displaySuggestions);

const renderResponse = (res) => {
    if(!res){
      console.log(res.status);
    }

    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    let wordList = [];
    for(let i = 0; i < Math.min(res.length, 10); i++){
      wordList.push(`<li>${res[i].word}</li>`);
    }
    wordList = wordList.join("");
  
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return
  }
  
  const renderRawResponse = (res) => {
    let trimmedResponse = res.slice(0, 10);
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }
  
  const renderJsonResponse = (res) => {
    let rawJson = {};
    for(let key in res){
      rawJson[key] = res[key];
    }
    rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
  }

  fetch(url, {method: 'POST' body: JSON.stringify({id: '200'}), Headers: {'Content-Type': 'application/json'}}, foo)