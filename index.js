class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque

    if (this.tipo === "mago") {
      ataque = "magia"
    } else if (this.tipo === "guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "monge") {
      ataque = "artes marciais"
    } else if (this.tipo === "ninja") {
      ataque = "shuriken"
    }

    console.log(`${this.tipo} atacou usando ${ataque}`)
  }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthus", 30, "guerreiro")
heroi1.atacar()
