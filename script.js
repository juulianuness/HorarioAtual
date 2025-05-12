function carregar() {
    const msg = document.getElementById("msg")
    const img = document.getElementById("imagem")

    function atualizar() {
        const data = new Date()
        const horaBrasilia = new Date(data.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }))
        const horas = horaBrasilia.getHours().toString().padStart(2, '0')
        const minutos = horaBrasilia.getMinutes().toString().padStart(2, '0')
        const segundos = horaBrasilia.getSeconds().toString().padStart(2, '0')
        
        const horarioFormatado = `${horas}:${minutos}:${segundos}`
        const hora = parseInt(horas)
        
        let saudacao = ""

        if (hora >= 0 && hora < 12) {
            saudacao = "Bom dia ☀️"
            img.src = "manha.png"
            document.body.style.background = "#baf7ff"
        } 
        else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde 🌤️"
            img.src = "tarde.png"
            document.body.style.background = "#3795de"
        } else {
            saudacao = "Boa noite 🌙"
            img.src = "noite.png"
            document.body.style.backgroundColor = "#15154a"
        }

        msg.innerHTML = `<h2>${horarioFormatado} - ${saudacao}</h2>`
    }

    atualizar()
    setInterval(atualizar, 1000)
}
