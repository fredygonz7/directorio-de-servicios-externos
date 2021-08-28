
const sendForm = (formValues, formReset) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(
            formValues
            // {
            //     email, password,
            // }
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            formReset();
        })
}
export { sendForm };