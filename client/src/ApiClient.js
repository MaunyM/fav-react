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

const ApiClient = {
    add
};
export default ApiClient;
