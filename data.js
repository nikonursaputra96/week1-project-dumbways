
function sendEmail() {

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value
    let option = document.getElementById('option').value
    let textarea = document.getElementById('textarea').value


   let send = "mailto:nikonursaputra@gmail.com" + "?subject=" + " Halo my name is " + encodeURIComponent(name) + " let's Talk " + "&body=" + "\nLet me introduce myself: " + "I'm " + encodeURIComponent(name) + " \n My email  " + encodeURIComponent(email) + " \n My phone number " + encodeURIComponent(tel) + "\nWe are  " + encodeURIComponent(option)+ " account " + " \n I think you're  "+ encodeURIComponent(textarea);


    console.log (link)
    window.location.href = send
}
