function add(fav) {
    fetch("/api/fav/create", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-type": "application/json"
        },
        body: JSON.stringify({fav:fav})
    });
}

function readAll(cb) {
  return fetch(`api/fav`, {
      accept: 'application/json',
    }).then(parseJSON)
      .then(cb);
}

function parseJSON(response) {
  return response.json();
}

const ApiClient = {
    add,
    readAll
};
export default ApiClient;
