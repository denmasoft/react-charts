export const indicadoresGeneralesService = {
    getAll
};

function getAll() {
    var url = new URL('https://jsonplaceholder.com');

    var params = { };
    const requestOptions = {
        method: 'GET'
    };
    url.search = new URLSearchParams(params).toString();
    return fetch(url, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}