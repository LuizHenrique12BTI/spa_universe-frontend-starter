function verifyToken() {
    const token = localStorage.getItem("token")

    if(!token) {
        window.location.href = "./pages/login/login.html"
        return
    }

    //verificar se o token é valido
}

verifyToken()