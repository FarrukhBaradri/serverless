const getRandomDadJoke = async() => {
    // const url = "https://icanhazdadjoke.com/";
    // const jokeStream = await fetch(url, {
    //     headers: {
    //         Accept: "application/json"
    //     }
    // })
    const url = "/.netlify/functions/jokes";
    // const jokeStream = await fetch(url);
    // const jsonJoke = await jokeStream.json();
    // const joke = jsonJoke.joke;

    // TURN THIS INTO A CHAIN OF .then and .catch!!!!!!
    // TEST TEST TEST!!!! - could also pass a catchall into getRandomJoke!!! to save to local storage!
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json())
        .then(jsonJoke => {
            console.log(jsonJoke.joke);
            resolve(jsonJoke.joke);
        }).catch(error => {
            reject(error);
        });
    });
    // return joke;
}
const displayJoke = (joke) => {
    const h1 = document.querySelector("h1");
    h1.textContent = joke;
}

const refreshJoke = async() => {
    // CHANGE THIS INTO .then!!!
    // const joke = await getRandomDadJoke();
    getRandomDadJoke().then(joke => {
        displayJoke(joke);
    }).catch(err => {
        console.log(err);
    });
}

refreshJoke();

setInterval(refreshJoke, 10000);