function carregar() {
    const msg = document.getElementById("msg")
    const img = document.getElementById("imagem")

    function atualizar() {
    const data = new Date()

    // Pegando a hora diretamente da string local formatada
    const [dia, mes, anoHora] = data.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split('/')
    const [ano, horaMinutoSegundo] = anoHora.split(', ')
    const [horas, minutos, segundos] = horaMinutoSegundo.split(':')

    const horarioFormatado = `${horas}:${minutos}:${segundos}`
    const hora = parseInt(horas)

    let saudacao = ""

    if (hora >= 0 && hora < 12) {
        saudacao = "Bom dia ☀️"
        img.src = "manha.png"
        document.body.style.background = "linear-gradient(135deg, #efbbd7, #e0d9a8)"
    } 
    else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde 🌤️"
        img.src = "tarde.png"
        document.body.style.background = "linear-gradient(135deg, #e0d9a8, #a8eab1)"
    } else {
        saudacao = "Boa noite 🌙"
        img.src = "noite.png"
        document.body.style.background = "linear-gradient(135deg, #a8eab1, #0c2c55)"
    }

    msg.innerHTML = `<h2>${horarioFormatado} - ${saudacao}</h2>`
}


    atualizar()
    setInterval(atualizar, 1000)
}
