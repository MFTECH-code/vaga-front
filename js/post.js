function fazPost(url, body) {
    const request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Authorization", "matheussilvafeitosa78@gmail.com")
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = () => {
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastroUsuario() {
    event.preventDefault()
    const url = "https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register"
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value

    const body = {
        name: nome,
        email: email
    }

    fazPost(url, body)
}