//Primjer 1
function calcukate_square_root_of_number(number){
const square_root = function (number){ 
    return Math.sqrt(number)
 }
 return square_root(number);
 
}

//Primjer 2

function add_together_all_values_in_an_array(array){
    const sum_of_array= function(array){
       return array.reduce((prev, curr)=>prev + curr);
    }
    return sum_of_array(array)
}

//Primjer 3

function return_smallest_value(array){

    const smallest_value=function(array){
       return array.sort((a,b) => a-b)
    }

    return  smallest_value(array)[0]

}

//Primjer 4

function return_longest_string_in_array(array){

 const longest_string=function (array) {
        var max = array[0].length;
        array.map(v => max = Math.max(max, v.length));
        result = array.filter(v => v.length == max);
        return result;
      }

      return longest_string(array)[0];
}

module.exports={calcukate_square_root_of_number,add_together_all_values_in_an_array, return_smallest_value,return_longest_string_in_array};