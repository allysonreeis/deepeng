const fiAll = {
  semLesoes: 0,
  lesoesLeves: 1,
  lesoesToleraveis: 2,
  lesoesGraves: 3,
  estadoCritico: 4,
}

const fpMax = 10;

const fpBeams = [
  {
    name: "Carbonatação",
    value: "carbonatacao",
    fp: 3,
  },
  {
    name: "Cobrimento deficiente",
    value: "cobrimento-deficiente",
    fp: 3,
  },
  {
    name: "Contaminação por cloretos",
    value: "contaminacao-cloretos",
    fp: 4,
  },
  {
    name: "corrosão de armaduras",
    value: "corrosao-armaduras",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "desagredacao",
    fp: 3,
  },
  {
    name: "desplacamento",
    value: "desplacamento",
    fp: 3,
  },
  {
    name: "eflorescência",
    value: "eflorescencia",
    fp: 2,
  },
  {
    name: "fissuras",
    value: "fissuras",
    fp: 5,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 2,
  },
  {
    name: "flechas",
    value: "flechas",
    fp: 5,
  },
  {
    name: "manchas",
    value: "manchas",
    fp: 3,
  },
  {
    name: "sinais de esmagamento",
    value: "sinais-esmagamento",
    fp: 4,
  },
  {
    name: "umidade",
    value: "umidade",
    fp: 3,
  },
]

const fpColumns = [
  {
    name: "Carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "Cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "Contaminação por cloretos",
    value: "",
    fp: 4,
  },
  {
    name: "Corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "Desagregação",
    value: "",
    fp: 3,
  },
  {
    name: "desplacamento",
    value: "desplacamento",
    fp: 3,
  },
  {
    name: "Desvio e geometria",
    value: "",
    fp: 4,
  },
  {
    name: "Eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 3,
  },
  {
    name: "Fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "Manchas",
    value: "manchas",
    fp: 3,
  },
  {
    name: "Recalque",
    value: "",
    fp: 5,
  },
  {
    name: "Sinais de esmagamento",
    value: "",
    fp: 5,
  },
  {
    name: "umidade",
    value: "umidade",
    fp: 3,
  },
];

const fpSlabs = [
  {
    name: "carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "contaminação por cloretos",
    value: "",
    fp: 3,
  },
  {
    name: "corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "",
    fp: 3,
  },  
  {
    name: "desplacamento",
    value: "",
    fp: 3,
  },
  {
    name: "eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 2,
  },
  {
    name: "fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "flechas",
    value: "",
    fp: 5,
  },
  {
    name: "manchas",
    value: "",
    fp: 3,
  },
  {
    name: "umidade",
    value: "",
    fp: 3,
  },
];

const fpStairsRamps = [
  {
    name: "Carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "contaminação por cloretos",
    value: "",
    fp: 4,
  },
  {
    name: "corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "",
    fp: 3,
  },
  {
    name: "desplacamento",
    value: "",
    fp: 3,
  },
  {
    name: "eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 2,
  },  
  {
    name: "fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "flechas",
    value: "",
    fp: 5,
  },
  {
    name: "manchas",
    value: "",
    fp: 3,
  },
  {
    name: "sinais de esmagamento",
    value: "",
    fp: 4,
  },
  {
    name: "umidade",
    value: "",
    fp: 3,
  },
];

const fpRetainingWall = [
  {
    name: "carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "contaminação por cloretos",
    value: "",
    fp: 4,
  },
  {
    name: "corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "",
    fp: 3,
  },
  {
    name: "deslocamento por empuxo",
    value: "",
    fp: 5,
  },
  {
    name: "desplacamento",
    value: "",
    fp: 3,
  },
  {
    name: "desvio de geometria",
    value: "",
    fp: 3,
  },
  {
    name: "eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 2,
  },
  {
    name: "fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "manchas",
    value: "",
    fp: 3,
  },
  {
    name: "sinais de esmagamento",
    value: "",
    fp: 5,
  },
  {
    name: "umidade",
    value: "",
    fp: 3,
  },
];

const fpTanks = [
  {
    name: "carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "contaminação por cloretos",
    value: "",
    fp: 4,
  },
  {
    name: "corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "",
    fp: 3,
  },
  {
    name: "desplacamento",
    value: "",
    fp: 5,
  },  {
    name: "eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 3,
  },
  {
    name: "fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "impermeabilização deficiente",
    value: "",
    fp: 4,
  },
  {
    name: "vazamento",
    value: "",
    fp: 5,
  },

];

const fpFoundations = [
  {
    name: "carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "contaminação por cloretos",
    value: "",
    fp: 4,
  },
  {
    name: "corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "",
    fp: 3,
  },
  {
    name: "desplacamento",
    value: "",
    fp: 3,
  },
  {
    name: "eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 3,
  },
  {
    name: "fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "recalque",
    value: "",
    fp: 5,
  },
  {
    name: "sinais de esmagamento",
    value: "",
    fp: 5,
  },
  {
    name: "umidade na base",
    value: "",
    fp: 3,
  },
];

const fpExpansionJoints = [
  {
    name: "Umidade",
    value: "umidade",
    fp: 5, // Verificar esses valores
  },
  {
    name: "Obstrução de junta",
    value: "obstrucao-junta",
    fp: 5,
  },
];

const fpArchitecturalComposition = [
  {
    name: "carbonatação",
    value: "",
    fp: 3,
  },
  {
    name: "cobrimento deficiente",
    value: "",
    fp: 3,
  },
  {
    name: "contaminação por cloretos",
    value: "",
    fp: 4,
  },
  {
    name: "corrosão de armaduras",
    value: "",
    fp: 5,
  },
  {
    name: "desagregação",
    value: "",
    fp: 3
  },
  {
    name: "desplacamento",
    value: "",
    fp: 3,
  },
  {
    name: "eflorescência",
    value: "",
    fp: 2,
  },
  {
    name: "falha de concretagem",
    value: "falha-concretagem",
    fp: 2,
  },
  {
    name: "fissuras",
    value: "",
    fp: 5,
  },
  {
    name: "manchas",
    value: "manchas",
    fp: 3,
  },
  {
    name: "sinais de esmagamento",
    value: "sinais-esmagamento",
    fp: 5,
  },
  {
    name: "umidade",
    value: "umidade",
    fp: 3,
  },
];

var fpDatas = [];
var listaDeDadosGlobais = [];
var tableList = [];
var tableListExport = [];

var optionElement = document.getElementById('type-name');
//var fpElement = document.getElementById('fp');
var fpElement;
var fiElement = document.getElementById('fi');

//optionElement.addEventListener('change', fillOptions);

function fillOptions (dataValue, x) {
  if (dataValue == 'viga') {
    fpDatas = fpBeams;
  } else if (dataValue == 'pilar') {
    fpDatas = fpColumns;
  } else if (dataValue == 'laje') {
    fpDatas = fpSlabs;
  } else if (dataValue == 'escada-rampas') {
    fpDatas = fpStairsRamps;
  } else if (dataValue == 'muro-arrimo') {
    fpDatas = fpRetainingWall;
  } else if (dataValue == 'reservatorio') {
    fpDatas = fpTanks;
  } else if (dataValue == 'fundacao') {
    fpDatas = fpFoundations;
  } else if (dataValue == 'junta-dilatacao') {
    fpDatas = fpExpansionJoints;
  } else if (dataValue == 'composicao-arq') {
    fpDatas = fpArchitecturalComposition;
  } else {
    fpDatas = [];
  }

  //console.table(fpDatas);

  addOptionElement(x);
}

function addOptionElement(fpElement) {
  fpElement.innerHTML = '';
  fpElement.innerHTML = '<option value="">Selecione uma opção</option>';

  fpDatas.forEach((fpData) => {
    var option = document.createElement('option');
    option.value = fpData.fp;
    option.text = fpData.name;

    fpElement.add(option);
  });
}

function calculateGDano () {
  var grauDeDano;
  var grauDeDanoMaximo = 0;
  var gdeElemento;
  var nivelDeterioracao;

  var beamName = document.querySelectorAll('#type-name');
  var listaDeElementos = [];
  beamName.forEach((dado) => {

    var fatherEL = dado.parentNode;
    var grandFatherEL = fatherEL.parentNode;
    var valueOfNumberElement = grandFatherEL.querySelector('#number-element').value;
    var valueOfFpElement = grandFatherEL.querySelector('#fp').value;
    var valueOfFiElement = grandFatherEL.querySelector('#fi').value;
    var nFloor = grandFatherEL.querySelector('#n-floor').value;
    var valueOfFrElement = grandFatherEL.querySelector('#fr').value;

    if (valueOfFiElement <= 2) {
      grauDeDano = 0.8*valueOfFiElement*valueOfFpElement;
    } else {
      grauDeDano = (12*valueOfFiElement - 28)*valueOfFpElement;
    }

    //var somatorioGd = calcSomatorio (listaDeElementos);

    const lengthOfElements =  document.querySelectorAll('#type-name').length;

    var dataOfElements = {};
    dataOfElements.typeOfElement = dado.value;
    dataOfElements.id = `${dado.value} ${valueOfNumberElement}`;
    dataOfElements.floor = nFloor;
    dataOfElements.fr = parseInt(valueOfFrElement);
    dataOfElements.gd = grauDeDano;
    dataOfElements.gdMax = 0
    //dataOfElements.somatorioGd = 0;

    listaDeElementos.push(dataOfElements);

    // Função para ordenar o array de objetos
    listaDeElementos.sort(function (a, b) {
      return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
    });

    group = listaDeElementos;

    /**
    * Agrupa os elementos por 'chave' e calcula o somatório
    */
    let groupOfElements = agruparPor(group, 'id');
    let listaDeChaves = Object.keys(groupOfElements);

    var valor = 0;
    var numeros = [];
    listaDeChaves.forEach((chave)=>{
      group.forEach((b)=>{
        if (chave == b.id) {
          valor = valor + b.gd;
        }
      })
      
      numeros.push({tipo: chave, somatorioGd: valor});
      listaDeElementos.forEach((e)=>{
        numeros.forEach((n)=> {
          if (e.id == n.tipo) {
            e['somatorioGd'] = n.somatorioGd;
          }
        })
      })
      valor = 0;
    })
    /********************************************************/
    //calculaGde(numeros, listaDeDadosGlobais, groupOfElements);
    listaDeDadosGlobais = listaDeElementos;
    gdMaximo(groupOfElements);

  })
  calculaGde(listaDeDadosGlobais);
}


var body = document.querySelector('body');

//Preenche as opções
body.addEventListener('click', (e) => {
  var elementSelected = e.target;
  var fatherElSel = elementSelected.parentNode;
  var grandFatherELSel = fatherElSel.parentNode;


  if (grandFatherELSel.className == 'schedule-item' && elementSelected.id == 'type-name') {
    var typeNameSel = grandFatherELSel.querySelector('#type-name');
    fpElement = grandFatherELSel.querySelector('#fp');

    fillOptions(typeNameSel.value, fpElement);

  }
});

body.addEventListener('dblclick', (e) => {
  calculateGDano();
  calcSomatorioGDE();
  calculaGdf();
  calculateGD();
  makeData();
  exibeDados(listaDeDadosGlobais);
});

function calcSomatorio () {
  let groupOfElements = agruparPor(group, 'id');
  let lista = Object.keys(groupOfElements);
  
  var valor = 0;

  lista.forEach((chave)=>{
    group.forEach((b)=>{
      if (chave == b.id) {
        valor = valor + b.gd;
      }
    })
    
    valor = 0;
  })
}

/********************************* */
let group = [];

function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

/********************************* */

function calculaGde (dadosG) {

  var gpDadosG = agruparPor(dadosG, 'id')

  var tempArray = []

  for (var gp1 in gpDadosG) {
    var x = gpDadosG[gp1];
    for (let i = 0; i < x.length; i++) {
      var gdeResultado = x[0].gdMax*(1+((x[0].somatorioGd - x[0].gdMax)/(x[0].somatorioGd)))
      tempArray.push({tipo: x[0].id, gde: gdeResultado})
      break;
    }
  }

  tempArray.forEach((e)=>{
    for (var i = 0; i < listaDeDadosGlobais.length; i++) {
      if (e.tipo == listaDeDadosGlobais[i].id) {
        listaDeDadosGlobais[i].gde = e.gde;
      }
    }
  })

}


function calculaGdf () {
  let groupOfElements = agruparPor(listaDeDadosGlobais, 'typeOfElement');
  let groupOfElementsById = agruparPor(listaDeDadosGlobais, 'id');

  var arrayTemporario = [];

  for (const keyType in groupOfElements) {
    for (const keyId in groupOfElementsById) {
      var tam = groupOfElementsById[keyId].length
      var i = 0
      while (i < tam) {
        if (keyType == groupOfElementsById[keyId][0].typeOfElement){
          arrayTemporario.push({tipo: keyType, somatorioDoGde: groupOfElementsById[keyId][i].somatorioGde, gdeMax: groupOfElementsById[keyId][i].gdeMax})
        }
        i++
      }
    }
  }

  arrayTemporario = arrayTemporario.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.tipo === thing.tipo && t.somatorioDoGde === thing.somatorioDoGde && t.gdeMax === thing.gdeMax
    ))
  )

  arrayTemporario.forEach((e)=>{
    e['gdf'] = e.gdeMax*(Math.sqrt(1+((e.somatorioDoGde-e.gdeMax)/e.somatorioDoGde)))
  })

  arrayTemporario.forEach((umElemento)=>{
    listaDeDadosGlobais.forEach((umDado)=>{
      if (umDado.typeOfElement == umElemento.tipo) {
        umDado['gdf'] = umElemento.gdf
      }
    })
  })
}

function calcSomatorioGDE () {
  let groupOfElements = agruparPor(listaDeDadosGlobais, 'typeOfElement');
  let groupOfElementsById = agruparPor(listaDeDadosGlobais, 'id');
  let lista = Object.keys(groupOfElements);

  var valor = 0;
  var numeros = [];
  var arrayTemporario = [];

  for (const keyType in groupOfElements) {
    for (const keyId in groupOfElementsById) {
      var tam = groupOfElementsById[keyId].length
      var i = 0
      while (i < tam) {
        if (keyType == groupOfElementsById[keyId][0].typeOfElement){
          arrayTemporario.push({tipo: keyType, id: keyId, valorDoGde: groupOfElementsById[keyId][i].gde})
        }
        i++
      }
    }
  }

  arrayTemporario = arrayTemporario.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.tipo === thing.tipo && t.id === thing.id && t.valorDoGde === thing.valorDoGde
    ))
  )

  lista.forEach((chave, index) => {
    arrayTemporario.forEach((e)=>{
      if (e.tipo == chave) {
        valor = valor + e.valorDoGde;
      }
    })
    numeros.push({tipo: chave, somatorioGDE: valor})
    valor = 0;
  })


  numeros.forEach((umElemento)=>{
    listaDeDadosGlobais.forEach((umDado)=>{
      if (umDado.typeOfElement == umElemento.tipo) {
        umDado['somatorioGde'] = umElemento.somatorioGDE
      }
    })
  })

  let newGroupOfElements = agruparPor(listaDeDadosGlobais, 'typeOfElement');
  gdeMaximo (newGroupOfElements);

}

/**
* Verifica o valor de grau de dano máximo e insere no array global
*/

function gdMaximo (grupo) {
  var tempArray = []

  var total = 0;
  
  for (var gp in grupo) {
    var maior = 0, menor = 0;
    for (var i = 0; i < grupo[gp].length; i++) {
      
      if (i == 0) {
        maior = grupo[gp][i].gd
        menor = grupo[gp][i].gd
      }

      if (grupo[gp][i].gd > maior) {
        maior = grupo[gp][i].gd
      } else {
        if (grupo[gp][i].gd < menor){
          menor = grupo[gp][i].gd
        }
      }
    }

    tempArray.push({tipo: gp, gdMax: maior})
    
  }

  tempArray.forEach((e)=>{
    for (var i = 0; i < listaDeDadosGlobais.length; i++){
      if (e.tipo == listaDeDadosGlobais[i].id) {
        
        listaDeDadosGlobais[i].gdMax = e.gdMax;
      }
    }

  })
  
}

function gdeMaximo (grupo) {
  var tempArray = []

  for (var gp in grupo) {
    var maior = 0, menor = 0;
    for (var i = 0; i < grupo[gp].length; i++) {

      if (i == 0) {
        maior = grupo[gp][i].gde
        menor = grupo[gp][i].gde
      }

      if (grupo[gp][i].gde > maior) {
        maior = grupo[gp][i].gde
      } else {
        if (grupo[gp][i].gde < menor){
          menor = grupo[gp][i].gde
        }
      }
    }

    tempArray.push({tipo: gp, gdeMax: maior})
  }

  tempArray.forEach((e)=>{
    for (var i = 0; i < listaDeDadosGlobais.length; i++){
      if (e.tipo == listaDeDadosGlobais[i].typeOfElement) {
        listaDeDadosGlobais[i].gdeMax = e.gdeMax;
      }
    }

  })

}

function calculateGD () {
 var somatorioFrGdf = 0;
  var somatorioFr = 0;
  var groupByType = agruparPor(listaDeDadosGlobais, 'typeOfElement')
  var numberOfFamilies = 0;

  for (var type in groupByType) {
    numberOfFamilies++
  }

  let groupOfElementsById = agruparPor(listaDeDadosGlobais, 'id');

  var arrayTemporario = [];

  for (const keyType in groupByType) {
    for (const keyId in groupOfElementsById) {
      var tam = groupOfElementsById[keyId].length
      var i = 0
      while (i < tam) {
        if (keyType == groupOfElementsById[keyId][0].typeOfElement){
          arrayTemporario.push({tipo: keyType, fr: groupOfElementsById[keyId][i].fr, gdf: groupOfElementsById[keyId][i].gdf})
        }
        i++
      }
    }
  }

  arrayTemporario = arrayTemporario.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.tipo === thing.tipo && t.fr === thing.fr && t.gdf === thing.gdf
    ))
  )

  var temp = []
  for (const tipo in groupByType) {
    var maior = 0, menor = 0;
    for (var i = 0; i < arrayTemporario.length; i++) {
      
      if (tipo == arrayTemporario[i].tipo) {
        if (i == 0) {
          maior = arrayTemporario[i].fr
          menor = arrayTemporario[i].fr
        }
  
        if (arrayTemporario[i].fr > maior) {
          maior = arrayTemporario[i].fr
        } else {
          if (arrayTemporario[i].fr < menor){
            menor = arrayTemporario[i].fr
          }
        }
      }
    }
    
    temp.push({tipo: tipo, fr: maior})
  }

  //Remove duplicatas
  arrayTemporario = arrayTemporario.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.tipo === thing.tipo && t.gdf === thing.gdf
    ))
  )

  var somatorioFr = 0
  var somatorioFrGdf = 0
  arrayTemporario.forEach((element)=>{
    somatorioFr += element.fr
    somatorioFrGdf += (element.fr*element.gdf)
  })
 
  var gd = somatorioFrGdf/somatorioFr
  
  listaDeDadosGlobais.forEach((e)=>{
    e['GD'] = gd;
  })
}

function makeData () {
  var tempArray = [];
  
  //Remove duplicatas
  tempArray = listaDeDadosGlobais.filter((thing, index, self) =>
    index === self.findIndex((t) => (
      t.id === thing.id && t.gdf === thing.gdf
    ))
  )
  
  tempArray.forEach((umElemento)=>{
    var Elemento = umElemento.id;
    var pavimento = umElemento.floor;
    var GrauDeDano = umElemento.somatorioGd;
    var GrauDeDanoMaximo = umElemento.gdMax;
    var GDE = umElemento.gde;
     
    if (umElemento.gde >= 0 && umElemento.gde < 15) {
      var NivelDeDeterioracaoGde = 'Baixo'
    } else if (umElemento.gde >= 15 && umElemento.gde < 50) {
      var NivelDeDeterioracaoGde = 'Médio'
    } else if (umElemento.gde >= 50 && umElemento.gde < 80) {
      var NivelDeDeterioracaoGde = 'Alto'     
    } else if (umElemento.gde >= 80 && umElemento.gde < 100) {
      var NivelDeDeterioracaoGde = 'Sofrível'      
    } else if (umElemento.gde >= 100) {
      var NivelDeDeterioracaoGde = 'Crítico'
    } else {
      var NivelDeDeterioracaoGde = ''
    }

    var grauDeDanoMaximoDaEstrutura = umElemento.gdeMax
    var gdf = umElemento.gdf
    var gd = umElemento['GD']

    if (umElemento['GD'] >= 0 && umElemento['GD'] < 15) {
      var NivelDeDeterioracaoGlobal = 'Baixo'
      var AcaoASerAdotada = 'Estado aceitável. Manutenção preventiva.'
    } else if (umElemento['GD'] >= 15 && umElemento['GD'] < 50) {
      var NivelDeDeterioracaoGlobal = 'Médio'
      var AcaoASerAdotada = 'Definir prazo/natureza para nova inspeção. Planejar intervenção em longo prazo (máx. 2 anos).'
    } else if (umElemento['GD'] >= 50 && umElemento['GD'] < 80) {
      var NivelDeDeterioracaoGlobal = 'Alto'
      var AcaoASerAdotada = 'Definir prazo/natureza para inspeção especializada detalhada. Planejar intervenção em médio prazo (máx. 1 ano).'
    } else if (umElemento['GD'] >= 80 && umElemento['GD'] < 100) {
      var NivelDeDeterioracaoGlobal = 'Sofrível'
      var AcaoASerAdotada = 'Definir prazo/natureza para inspeção especializada detalhada. Planejar intervenção em curto prazo (máx. 6 meses).'      
    } else if (umElemento['GD'] >= 100) {
      var NivelDeDeterioracaoGlobal = 'Crítico'
      var AcaoASerAdotada = 'Inspeção especial emergencial. Planejar intervenção imediata.'
    } else {
      var NivelDeDeterioracaoGlobal = ''
      var AcaoASerAdotada = ''
    }

    tableList.push({
      Elemento,
      pavimento,
      GrauDeDano,
      GrauDeDanoMaximo,
      GDE,
      NivelDeDeterioracaoGde,
      grauDeDanoMaximoDaEstrutura,
      gdf,
      gd,
      NivelDeDeterioracaoGlobal,
      AcaoASerAdotada
    })
  })
  
  tableListExport = tableList
  tableList = []
}

function exibeDados (dados) {
  console.clear()
  console.table(dados)
}

var buttonSubmit = document.querySelector('.calculate')
buttonSubmit.addEventListener('click', e => {

  calculateGDano();
  calcSomatorioGDE();
  calculaGdf();
  calculateGD();
  makeData();

  var name = document.getElementById('name').value
  var location = document.getElementById('location').value
  var age = document.getElementById('age').value
  var date = document.getElementById('date').value
  var natureUse = document.getElementById('nature-use').value
  var buildingArea = document.getElementById('bulding-area').value
  var numberFloors = document.getElementById('number-floors').value
  var notes = document.getElementById('notes').value

  var arrayInfo = {name, location, age, date, natureUse, buildingArea, numberFloors, notes}

  var infoJson = JSON.stringify(arrayInfo)
  var dadosJson = JSON.stringify(tableListExport)

  localStorage.setItem('infoOfBuildings', infoJson)
  localStorage.setItem('dadosGDE', dadosJson)
})
