var chai = require("chai");
var expect = chai.expect;

const { increasing_each_number_in_list_by_two,squaring_numers_in_a_list,adding_two_strings_together,transforming_an_object_to_a_list } = require("../map");
const { adding_together_all_values_in_a_list,adding_together_a_list_of_strings,creating_a_single_aray_from_nested_array,finding_the_average_in_an_array } = require("../reduce");
const { increasing_each_number_in_array_by_two_using_forEach,squareing_numbers_in_an_array,adding_index_to_a_value,removeing_2_from_array } = require("../forEach");
const { filtering_numbers_divideble_by_2,filtering_people_younger_then_1999,filter_people_with_surname_fabijancic,filter_repeating_values } = require("../filter");
const { calcukate_square_root_of_number,add_together_all_values_in_an_array,return_smallest_value,return_longest_string_in_array } = require("../lambda");
const {adding_two_arrays_together,finding_the_biggest_number,cubing_elements_of_array,} = require("../closure");

//Map
describe('using map method', function() {
    //primjer 1
    it('increasing_each_number_in_list_by_two should be a function', function () {
        expect(increasing_each_number_in_list_by_two).to.be.a('function');
    });
    it('increasing_each_number_in_list_by_two should returned the list with the numbers increased by two', function () {
        expect(increasing_each_number_in_list_by_two([ 1,2,3,4,5])).to.eql([3,4,5,6,7]);
    });

    //primjer 2

    it('squaring_numers_in_a_list should be a function', function () {
        expect(squaring_numers_in_a_list).to.be.a('function');
    });
    it('squaring_numers_in_a_list should returned the numbers squared', function () {
        expect(squaring_numers_in_a_list([ 1,2,3,4,5])).to.eql([1,4,9,16,25]);
    });

    //primjer 3

    it('adding_two_strings_together should be a function', function () {
        expect(adding_two_strings_together).to.be.a('function');
    });
    it('adding_two_strings_together should return a list of strings together', function () {
        expect(adding_two_strings_together([ "Ivica","Marica","Perica"],[ "Horvat","Kovacevic","Fabijancic"])).to.eql(["Ivica Horvat","Marica Kovacevic","Perica Fabijancic"]);
    });

    //primjer 4

    it('transforming_an_object_to_a_listshould be a function', function () {
        expect(transforming_an_object_to_a_list).to.be.a('function');
    });
    it('transforming_an_object_to_a_list should returned the object in form of a list', function () {
        expect(transforming_an_object_to_a_list(
            [{name:"Ivica", born:1999} ,
            {name:"Marica",born:1998},
            {name:"Perica", born:1997}]))
            .to.eql(["Ivica was born in 1999","Marica was born in 1998","Perica was born in 1997"]);
    });

});


//reduce
describe('using reduce method', function() {
    
    //Primjer 1

    it('adding_together_all_values_in_a_list should be a function', function () {
        expect(adding_together_all_values_in_a_list).to.be.a('function');
    });

    it('adding_together_all_values_in_a_list should return 10 when entered list is [1,2,3,4]', function () {
        expect(adding_together_all_values_in_a_list([1,2,3,4])).to.eql(10);
    });

    //Primjer 2

    it('adding_together_a_list_of_strings should be a function', function () {
        expect(adding_together_a_list_of_strings).to.be.a('function');
    });
    it('adding_together_all_values_in_a_list should return Da Ne Mozda when entered list is ["Da","Ne","Mozda"]', function () {
        expect(adding_together_a_list_of_strings(["Da","Ne","Mozda"])).to.eql(" Da Ne Mozda");
    });

    //Primjer 3

    it('creating_a_single_aray_from_nested_array should be a function', function () {
        expect(creating_a_single_aray_from_nested_array).to.be.a('function');
    });
    it('creating_a_single_aray_from_nested_array should return [ 5, 6, 4, 7, 6, 20, 11, 7 ] when entered values is [[5, 6], [4, 7], [6, 20], ,[11, 7]]', function () {
        expect(creating_a_single_aray_from_nested_array([[5, 6], [4, 7], [6, 20], ,[11, 7]])).to.eql([ 5, 6, 4, 7, 6, 20, 11, 7 ]);
    });

    //Primjer 4
    it('finding_the_average_in_an_array should be a function', function () {
        expect(finding_the_average_in_an_array).to.be.a('function');
    });
    it('finding_the_average_in_an_array should return 5.5 when entered values is [5,6,4,5,6,7]', function () {
        expect(finding_the_average_in_an_array([5,6,4,5,6,7])).to.eql(5.5);
    });

})



//forEach
describe('using forEach method', function() {
//primjer 1
    it('increasing_each_number_in_array_by_two_using_forEach should be a function', function () {
        expect(increasing_each_number_in_array_by_two_using_forEach).to.be.a('function');
    });
    it('increasing_each_number_in_list_by_two should returne [3,4,5,6,7] when entered numbers are [3,4,5,6,7]', function () {
        expect(increasing_each_number_in_array_by_two_using_forEach([ 1,2,3,4,5])).to.eql([3,4,5,6,7]);
    });

//primjer 2

it('squareing_numbers_in_an_array should be a function', function () {
    expect(squareing_numbers_in_an_array).to.be.a('function');
});
it('squareing_numbers_in_an_array should returne [1,4,9,16,25] when entered numbers are [ 1,2,3,4,5]', function () {
    expect(squareing_numbers_in_an_array([ 1,2,3,4,5])).to.eql([1,4,9,16,25]);
});

//primjer 3

it('adding_index_to_a_value should be a function', function () {
    expect(adding_index_to_a_value).to.be.a('function');
});
it('adding_index_to_a_value should return ["0. Marko","1. Goran","2. Mirjan"] when entered strings are ["Marko","Goran","Mirjan"]', function () {
    expect(adding_index_to_a_value(["Marko","Goran","Mirjan"])).to.eql(["0. Marko","1. Goran","2. Mirjan"]);
});

//Primjer 4

it('removeing_2_from_array should be a function', function () {
    expect(removeing_2_from_array).to.be.a('function');
});
it('removeing_2_from_array should return [1,4,5,5,5] when entered strings are [1,2,4,5,2,5,2,5,2]', function () {
    expect(removeing_2_from_array([1,2,4,5,2,5,2,5,2])).to.eql([1,4,5,5,5]);
});
})



//filter
describe('using filter method', function() {

    //Primjer 1

    it('filtering_numbers_divideble_by_2 should be a function', function () {
        expect(filtering_numbers_divideble_by_2).to.be.a('function');
    });
    it('increasing_each_number_in_list_by_two should return [ 1, 3, 5, 9, 11 ] when entered numbers are [ 1,2,3,4,5,6,8,9,11,12,42]', function () {
        expect(filtering_numbers_divideble_by_2([ 1,2,3,4,5,6,8,9,11,12,42])).to.eql([ 1, 3, 5, 9, 11 ]);
    });

   
    //Primjer 2

    it('filtering_people_younger_then_1999 should be a function', function () {
        expect(filtering_people_younger_then_1999).to.be.a('function');
    });
    it('increasing_each_number_in_list_by_two should return [{name:"Marica",born:1998},{name:"Perica", born:1997}] when entered values are [{name:"Ivica", born:1999} ,{name:"Marica",born:1998}, {name:"Perica", born:1997},  {name:"Zdravko", born:2000}]', function () {
        expect(filtering_people_younger_then_1999(
            [{name:"Ivica", born:1999} ,
            {name:"Marica",born:1998},
            {name:"Perica", born:1997},
            {name:"Zdravko", born:2000}
        ])).to.eql([{name:"Marica",born:1998},{name:"Perica", born:1997}]);
    });

    //primjer 3

    it('filter_people_with_surname_fabijancic should be a function', function () {
        expect(filter_people_with_surname_fabijancic).to.be.a('function');
    });
    it('filter_people_with_surname_fabijancic should return [{name:"Marica",surname:"Vivoda"},{name:"Zdravko", surname:"Vivoda"}] when entered values are [{name:"Ivica", surname:"Fabijancic"} ,{name:"Marica",surname:"Vivoda"},{name:"Perica", surname:"Fabijancic"} {name:"Zdravko", surname:"Vivoda"}]', function () {
        expect(filter_people_with_surname_fabijancic(
            [{name:"Ivica", surname:"Fabijancic"} ,
            {name:"Marica",surname:"Vivoda"},
            {name:"Perica", surname:"Fabijancic"},
            {name:"Zdravko", surname:"Vivoda"}
        ])).to.eql([{name:"Marica",surname:"Vivoda"},{name:"Zdravko", surname:"Vivoda"}]);
    });

    //Primjer 4

    it('filter_repeating_values should be a function', function () {
        expect(filter_repeating_values).to.be.a('function');
    });
    it('filter_repeating_values should return [ 1, 2, 3, "a", 4, 5, "b" ] when entered values are [1,2,3,"a",4,"a",1,4,5,2,"b"]', function () {
        expect(filter_repeating_values([1,2,3,"a",4,"a",1,4,5,2,"b"])).to.eql([ 1, 2, 3, 'a', 4, 5, 'b' ]);
    });

});


//Lambda funcitons

describe('using Lambda funcitons', function() {

    //primjer 1

    it('calcukate_square_root_of_number should be a function', function () {
        expect(calcukate_square_root_of_number).to.be.a('function');
    });
    it('calcukate_square_root_of_number should return 2 when entered number is [4', function () {
        expect(calcukate_square_root_of_number(4)).to.eql(2);
    });

    //primjer 2

    it('add_together_all_values_in_an_array should be a function', function () {
        expect(calcukate_square_root_of_number).to.be.a('function');
    });
    it('add_together_all_values_in_an_array should return 21 when entered array is [1,2,3,4,5,6]', function () {
        expect(add_together_all_values_in_an_array([1,2,3,4,5,6])).to.eql(21);
    });

    //primjer 3

    it('return_smallest_value should be a function', function () {
        expect(return_smallest_value).to.be.a('function');
    });
    it('return_smallest_value should return 5 when entered array is [5,88,34,23,55,36,34,634]', function () {
        expect(return_smallest_value([5,88,34,23,55,36,34,634])).to.eql(5);
    });

    //Primjer 4

    it('return_longest_string_in_array should be a function', function () {
        expect(return_longest_string_in_array).to.be.a('function');
    });
    it('return_longest_string_in_array should return "kako jeee" when entered array is "aloo","kako jeee","loseeeee","okok"', function () {
        expect(return_longest_string_in_array(["aloo","kako jeee","loseeeee","okok"])).to.eql("kako jeee");
    });

});


//closure

describe('using closure funcitons', function() {
 //Primjer 1

 it('adding_two_arrays_together should be a function', function () {
    expect(adding_two_arrays_together).to.be.a('function');
});
it('adding_two_arrays_together should return "aloo","kako jeee","loseeeee","okok","world","city","country" when entered array is "aloo","kako jeee","loseeeee","okok"', function () {
    expect(adding_two_arrays_together(["aloo","kako jeee","loseeeee","okok"])).to.eql('aloo,kako jeee,loseeeee,okok,world,city,country');
});

//Primjer 2

it('finding_the_biggest_number should be a function', function () {
    expect(finding_the_biggest_number).to.be.a('function');
});
it('finding_the_biggest_number should return 745 when entered array is [1,235,654,74,7,34,745,7]', function () {
    expect(finding_the_biggest_number([1,235,654,74,7,34,745,7])).to.eql(745);
});

//Primmjer 3

it('cubing_elements_of_array should be a function', function () {
    expect(cubing_elements_of_array).to.be.a('function');
});
it('cubing_elements_of_array should return [  1, 27, 64, 216, 343 ] when entered array is [1,3,4,6,7]', function () {
    expect(cubing_elements_of_array([1,3,4,6,7])).to.eql([  1, 27, 64, 216, 343 ]);
});

//Primjer 4


})
