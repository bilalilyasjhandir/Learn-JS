const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if(results<18.6){
        guide.innerHTML = `<span>You are under weight</span>`
    }
    else if(results>18.6 && results<24.9){
        guide.innerHTML = `<span>Your weight is normal</span>`
    }
    else{
        guide.innerHTML = `<span>You are over weight</span>`
    }
  }
});