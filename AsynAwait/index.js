function fakeAxios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'Hello World! s' });
        }, 1000);
    });
}

fakeAxios().then((response) => {
    console.log(response.data + + '1');
})

async function getData() {
    const data = await fakeAxios();
    console.log(data)
}