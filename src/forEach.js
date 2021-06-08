//primjer 1
function increasing_each_number_in_array_by_two_using_forEach(array){
 let rezultat=[]
 array.forEach(adding)
 function adding(element){
return rezultat.push (element+2)
}
return rezultat
}

//primjer 2

function squareing_numbers_in_an_array(array){
    let rezultat=[]
    array.forEach(adding)
    function adding(element){
   return rezultat.push (element*element)
   }
   return rezultat
   }

//primjer 3

function adding_index_to_a_value(array){
    let rezultat=[]
    let i=-1
    function addidIndex(name, index) {
        i++
        return rezultat.push(index + ". "+ name);
    };
    
    array.forEach(addidIndex);

   return rezultat
   }

//Primjer 4

function removeing_2_from_array(array){
let rezultat=[]
    array.forEach(remove_two) 

function remove_two(number){
  if (number=== 2) {
    return;
  }
  else{
    return rezultat.push(number)
  }
}
return rezultat

}
module.exports={increasing_each_number_in_array_by_two_using_forEach,squareing_numbers_in_an_array,adding_index_to_a_value,removeing_2_from_array}