//Primjer 1
function adding_two_arrays_together(array){ 
let result
array_adding() 
function array_adding() {
    var used_array = ["world","city","country"];
    function array_return() {
        result=array+","+used_array
    }
    array_return();
}
return result;
}

//Primjer 2
function finding_the_biggest_number(array){ 
    
    let max
    getArrayMax(array)
    
    function getArrayMax(array){
        max= Math.max.apply(null, array);
        return max
     }
       
    return max
    }
   
//primjer 3

function cubing_elements_of_array(array){
i=-1
let array_cubed=[]
array.forEach(cubingElements) 
function cubingElements(array){
    i++
    return array_cubed[i]=array*array*array
 }
 return array_cubed
}




    

module.exports={adding_two_arrays_together,finding_the_biggest_number,cubing_elements_of_array}