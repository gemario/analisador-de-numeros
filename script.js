let num = document.querySelector('input#fNum')
let lista = document.querySelector('select#fLista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já existente na lista!!')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('[ERRO] Adicione valores antes de FINALIZAR!')
  } else {
    let totElement = valores.length
    let maiorValor = valores[0]
    let menorValor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maiorValor) maiorValor = valores[pos]
      if (valores[pos] < menorValor) menorValor = valores[pos]
    }
    media = soma / totElement
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${totElement} números analisados.<p/>`
    res.innerHTML += `<p>O maior valor analisado foi ${maiorValor}.<p/>`
    res.innerHTML += `<p>O menor valor analisado foi ${menorValor}.<p/>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<p/>`
    res.innerHTML += `<p>A média dos valores analisados é ${media}.<p/>`
  }
}
