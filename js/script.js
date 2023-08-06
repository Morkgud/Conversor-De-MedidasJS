const unidades = [
  { nome: 'Metros', valor: 1 },
  { nome: 'Centímetros', valor: 100 },
  { nome: 'Milímetros', valor: 1000 },
  { nome: 'Quilômetros', valor: 0.001 },
  { nome: 'Polegadas', valor: 39.3701 },
  { nome: 'Pés', valor: 3.28084 },
  { nome: 'Jardas', valor: 1.09361 },
  { nome: 'Decímetros', valor: 10 },
  { nome: 'Decâmetros', valor: 0.1 },
  { nome: 'Hectômetros', valor: 0.01 }
]

function preencherUnidades() {
  const unidadeOrigemSelect = document.getElementById('unidadeOrigem')
  const unidadeDestinoSelect = document.getElementById('unidadeDestino')

  unidades.forEach((unidade, indice) => {
    const optionOrigem = document.createElement('option')
    const optionDestino = document.createElement('option')

    optionOrigem.value = indice
    optionDestino.value = indice

    optionOrigem.textContent = unidade.nome
    optionDestino.textContent = unidade.nome

    unidadeOrigemSelect.appendChild(optionOrigem)
    unidadeDestinoSelect.appendChild(optionDestino)
  })
}

preencherUnidades()

const converterForm = document.getElementById('converterForm')
const resultadoElement = document.getElementById('resultado')

converterForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const valor = parseFloat(document.getElementById('valor').value)
  const unidadeOrigem = parseInt(document.getElementById('unidadeOrigem').value)
  const unidadeDestino = parseInt(
    document.getElementById('unidadeDestino').value
  )

  const resultado =
    valor * (unidades[unidadeDestino].valor / unidades[unidadeOrigem].valor)

  resultadoElement.innerHTML = `${valor} ${
    unidades[unidadeOrigem].nome
  } é igual a ${resultado.toFixed(2)} ${unidades[unidadeDestino].nome}.`
})
