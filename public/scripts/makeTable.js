var dadoslocais = localStorage.getItem('dadosGDE')
var infoLocal = localStorage.getItem('infoOfBuildings')

fillDatas(JSON.parse(infoLocal))
makeFillTable(JSON.parse(dadoslocais))

function fillDatas (datas) {
  
  var mainSelected = document.querySelector('main')
  
  var name = document.createElement('p')
  var location = document.createElement('p')
  var age = document.createElement('p')
  var date= document.createElement('p')
  var natureUse = document.createElement('p')
  var buildingArea = document.createElement('p')
  var numberOfFloors = document.createElement('p')
  var notes = document.createElement('p')
  
  name.innerText = ('Edificação: ' + datas.name)
  location.innerText = ('Endereço: ' + datas.location)
  age.innerText = ('Idade da Edificação: ' + datas.age)
  date.innerText = ('Data da Inspeção: ' + datas.date)
  natureUse.innerText = ('Natureza do Uso: ' + datas.natureUse)
  buildingArea.innerText = ('Área Construída(m²): ' + datas.buildingArea + 'm²')
  numberOfFloors.innerText = ('N° Pavimentos: ' + datas.numberFloors)
  notes.innerText = ('Observações: ' + datas.notes)

  mainSelected.insertAdjacentElement('afterbegin', notes)
  mainSelected.insertAdjacentElement('afterbegin', numberOfFloors)
  mainSelected.insertAdjacentElement('afterbegin', buildingArea)
  mainSelected.insertAdjacentElement('afterbegin', natureUse)
  mainSelected.insertAdjacentElement('afterbegin', date)
  mainSelected.insertAdjacentElement('afterbegin', age)
  mainSelected.insertAdjacentElement('afterbegin', location)
  mainSelected.insertAdjacentElement('afterbegin', name)
}

function makeFillTable (datas) {
  var table = document.querySelector('table')
  for (let i = 0; i < datas.length; i++) {
    var linha = document.createElement('tr')

    for (const key in datas[i]) {
      var dado = document.createElement('td')

      if (!isNaN(datas[i][key])) {
        dado.innerText = (datas[i][key]).toFixed(2)
      } else {
        dado.innerText = (datas[i][key])
      }
      linha.appendChild(dado)
      table.appendChild(linha)
    }
    
  }

}

window.onbeforeunload = function() {
  localStorage.removeItem('dadosGDE');
  localStorage.removeItem('infoOfBuildings');

  return '';
};
