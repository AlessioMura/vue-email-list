//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
//generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

//Prep
const email_list = document.getElementById('email_list');

//Processing
function get_email() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        const email = response.data.response;
        const item_list = document.createElement('li');
        item_list.textContent = email;
        email_list.appendChild(item_list);
    })
}