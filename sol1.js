const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA']

function arrOfArr(countries){
    for(var i=0; i<=countries.length-1; i++){
        let b = countries[i].length
        let a =countries[i].split("-");
        let c = countries[i].substring(0,3);
        countries.splice(i,1,a);
        countries[i].push(c)
        countries[i].push(b);
    }
    console.log(countries);
}
arrOfArr(countries);