var numberOfFloorsEl = document.getElementById('number-floors');


numberOfFloorsEl.addEventListener('input', (e)=> {
  var nFloorEl = document.querySelectorAll('#n-floor');
  //console.log(nFloorEl)
  const n = e.target.value;
  
  

  nFloorEl.forEach((countFloor)=>{
    countFloor.innerHTML = '';
    for (let i = 0; i <= n; i++) {
      var option = document.createElement('option');
      if (i == 0) {
        option.value = 'terreo';
        option.text = 'PAV. TÉRREO';  
      } else if (i == n) {
        option.value = 'cobertura';
        option.text = 'COBERTURA';
      } else {
        option.value = `${i}-pav`;
        option.text = `${i}° PAV`;
      }
      
      countFloor.add(option);
    }
    
  })
});

