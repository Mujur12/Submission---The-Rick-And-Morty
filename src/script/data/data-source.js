class DataSource {
    static searchCharacter(keyword) {
        return fetch(`https://rickandmortyapi.com/api/character/?name=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }

    static listCharacter() {
        return fetch(`https://rickandmortyapi.com/api/character`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject("Terjadi Kesalahan");
                }
            })
    }
}

export default DataSource;