document.addEventListener("DOMContentLoaded", () => {
    const country = document.getElementById("country")
    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data => {
        let output = ""
        let list = []
        data.forEach(country => {
            console.log(country.name.common)
            list.push(country.name.common)
        })
        list = list.sort()
        list.unshift("<option disabled selected hidden>Choose country*</option>")
        for(let i=0; i<list.length; i++){
            output += `<option>${list[i]}</option>`
        }
        country.innerHTML = output;
    }).catch(err => {
        console.log(err)
    })
})

function validateForm(){

    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var country = document.getElementById("country").value
    var checkbox = document.getElementsByName("checkbox")[0].checked;
    
    // Validasi kosong
    if(username == ""){
        alert("username cannot be empty")
    }

    // Validasi email -> akhirnya harus @gmail.com
    else if(!email.endsWith("@gmail.com")){
        alert("Email cannot be empty");
    }

    // Validasi no HP
    else if(!phone.startsWith("0")){
        alert("Phone number must start with '0'")
    }

    // Validasi dropdown
    else if(country == "Choose country*"){
        alert("Nationality cannot be empty")
    }

    // validasi checkbox
    else if(!checkbox){
        alert("Terms and conditins must be agreed")
    }

    else{
        alert("Form submitted successfully")
    }

    

}