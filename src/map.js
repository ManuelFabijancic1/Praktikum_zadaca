//primjer 1
function increasing_each_number_in_list_by_two(list){

    const rezultat = list.map(x => x + 2);

    return rezultat;  
}

//primjer 2

function squaring_numers_in_a_list(list_of_numbers){

let rezultat = list_of_numbers.map(function(num) {
    return num*num
})

return rezultat;
}

//primjer 3

function adding_two_strings_together(name,surname){
   let i=-1
    let rezultat = name.map(function(num) {
        i++;
        return name[i]+" "+surname[i]
        
       })
    
    return rezultat;
    }

//primjer 4

    function transforming_an_object_to_a_list(object){
        let i=-1
        let rezultat = object.map(function(num) {
            i++
            return object[i].name+" was born in " + object[i].born 
            
           })
         
         return rezultat;
         }



module.exports = {increasing_each_number_in_list_by_two,squaring_numers_in_a_list,adding_two_strings_together,transforming_an_object_to_a_list };
