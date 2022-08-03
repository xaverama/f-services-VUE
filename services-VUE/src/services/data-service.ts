
export function dataService() {

    function getAllData() :Promise<any> {
        return fetch("https://api.kanye.rest")
            .then((response) => response.json())
            .then((data) => data.quote)
    }

    return {
        getAllData
    }
}
