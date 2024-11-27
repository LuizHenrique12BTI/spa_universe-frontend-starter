function verifyToken() {
    const token = localStorage.getItem("Token")

    if(!token) {
        window.location.href = "./pages/login/login.html"
        return
    }

    //verificar se o token é valido
}

verifyToken()