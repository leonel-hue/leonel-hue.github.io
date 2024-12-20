async function redirection(event) {
    event.preventDefault();
    const url = 'https://www.donapram.site/SocialMedia.html';
    const submit = document.querySelector('#submit');
    const data = {username: username,
                password: password
    };
    try {
        const response = await fetch(url, {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(data)});
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            window.location.href = url;
        } throw new Error('Request failed!');
    } catch (error) {
        console.log(error);
    }
submit.addEventListener('click', redirection);
console.log(redirection);
}