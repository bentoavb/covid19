const loadCountry = function(array) {

    let x = []
    let y = []
    let aux;
    let label = [1];
    
    for (let i = 1; i <= 5; i++) {
        label.push(parseInt(i*array.length/5))
    }
  
    let i = 0;
    array.forEach(e => {
        i = i + 1;
        if (!label.includes(i)){
            x.push("")
        }else{
            aux = e['date'].split('-')
            x.push(`${aux[2]}/${aux[1]}`)
        }
        
        y.push(e['confirmed'])
    });
  
    return {
        labels: x,
        datasets: [
            {
            data: y,
            },
        ],
    }
  }

const showCountries = function (text, array) {
    let l = text.length
    text = text.toLowerCase()
    let res = []
    if (text == '')  return array

    array.forEach(e => {
        if (text == e.toLowerCase().substring(0,l)){
            res.push(e)
        }
    });
    return res;
}

module.exports = {
    loadCountry,
    showCountries
};