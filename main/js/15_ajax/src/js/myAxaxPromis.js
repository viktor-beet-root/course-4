function myAjaxPromis(options, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.responseType = options.type ? options.type : 'json';

        xhr.onload = () => {
            if (xhr.status < 400) {
                resolve(xhr.response);
            } else {
                reject(xhr);
            }
        };

        xhr.onerror = (e) => {
            reject(xhr);
        };

        xhr.onprogress = (e) => {
            if (e.lengthComputable) {
                console.log(`Loaded: ${e.loaded} to ${e.total}`)
            } else {
                console.log(`Loaded: ${e.loaded}`)
            }
        }

        const method = options.method ? options.method : 'GET';

        xhr.open(method, options.url);

        if (method === 'GET') {
            xhr.send();
        } else if (method === 'POST') {
            xhr.setRequestHeader('Content-type', 'application/json');
            data = toJson(data);
            xhr.send(data);
        }
    });
}

function toJson(data) {
    if (typeof data === 'object') {
        data = JSON.stringify(data);
    }

    return data;
}

export default myAjaxPromis;
