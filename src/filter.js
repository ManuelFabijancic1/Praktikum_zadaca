//Primjer 1
function filtering_numbers_divideble_by_2(array){

    let rezultat = array.filter(function (arr) {
        
        return arr % 2==1;
    });
    return rezultat;
    }



//Primjer 2

function filtering_people_younger_then_1999(array){
  let rezult =  array.filter(person => person.born < 1999)

  return rezult
}

//Primjer 3

function filter_people_with_surname_fabijancic(array){
    let rezult =  array.filter(person => person.surname != "Fabijancic")
    return rezult
}

//primjer 4

function filter_repeating_values(array){
    let rezult =  array.filter((item, index) => array.indexOf(item) === index);
    return rezult
}

module.exports={filtering_numbers_divideble_by_2,filtering_people_younger_then_1999,filter_people_with_surname_fabijancic,filter_repeating_values}


