// var product = {
//     name: 'apple jam',
//     type: 'fruit jam',
//     ingredient: 'apple, sugar',
//     origin: 'korea'
// };

// for (const key in product) {
//     // alert(key + ' : ' + product[key]);
//     document.writeln(key + ' : ' + product[key] + '<br>');
// }

let person = {
    name: 'Hugh',
    eat: function (food) {
        document.write(this.name + ' is eating ' + food);
    }
};

person.eat('apple');
