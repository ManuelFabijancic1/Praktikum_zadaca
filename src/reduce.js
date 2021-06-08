//Primjer 1

function adding_together_all_values_in_a_list(list)
{
const initialValue = 0;
const reducer = (accumulator, item) => {
  return accumulator + item;
};
const rezultat = list.reduce(reducer, initialValue)
return rezultat
}

//Primjer 2

function adding_together_a_list_of_strings(list)
{
const initialValue = ""
const reducer = (accumulator, item) => {
  return accumulator +" "+ item;
};
const rezultat = list.reduce(reducer, initialValue)
return rezultat
}

//Primjer 3

function creating_a_single_aray_from_nested_array(array){

    let rezultat = array.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

    return rezultat
}

//Primjer 4

function finding_the_average_in_an_array(array){

const rezultat = array.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});

return rezultat
}

module.exports={adding_together_all_values_in_a_list,adding_together_a_list_of_strings,creating_a_single_aray_from_nested_array,finding_the_average_in_an_array};