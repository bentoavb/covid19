const loadCountry = function(array) {

    let x = []
    let y_cases = []
    let y_deaths = []
    let y_recovered = []
    let table = []
    let aux;
    let label = [1];
    let x_axis = [];

    for (let i = 1; i <= 5; i++) {
        label.push(parseInt(i*array.length/5))
    }
  
    let i = 0;
    array.forEach(e => {
        i = i + 1;
        aux = e['date'].split('-')      
        if (!label.includes(i)){
            x.push("")
        }else{
            x.push(`${aux[2]}/${aux[1]}`)
        }

        x_axis.push(`${aux[2]}/${aux[1]}`)
        table.push([`${aux[2]}/${aux[1]}`, e['confirmed'], e['deaths'], e['recovered']])
        
        y_cases.push(e['confirmed'])
        y_deaths.push(e['deaths'])
        y_recovered.push(e['recovered'])
    });
  
    return {
        'Cases': {
            labels: x,
            datasets: [
                {
                data: y_cases,
                },
            ],
        },
        'Deaths': {
            labels: x,
            datasets: [
                {
                data: y_deaths,
                },
            ],
        },
        'Recovered': {
            labels: x,
            datasets: [
                {
                data: y_recovered,
                },
            ],
        },
        'Table': table,
        'x_axis': x_axis
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