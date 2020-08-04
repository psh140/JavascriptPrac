// var score = 85;
// if(score >= 0 && score < 60) {

// }

// var array = [273, 32, 103, 57 ,52];
// alert(array[0]);

// var fun = function() {
//     alert('function_1');
//     alert('function_2');
// }

// alert(typeof (fun) + " : " + fun);

// function fun1() {
//     alert('function1');
// }

// fun1();
// alert(typeof(fun1));

// document.write("<h1>" + 3 + 2342 + "</h1>");
// document.write("<h2>" + '가나다가나다' + "</h2>");


// function Multiple(x) {
//     var sum = 0;
//     for (var index = 0; index <= 10; index++) {
//         sum += index;
//     }
//     return sum;
// }


// document.write(Multiple(10) + '<br>');

function fn1() {
    for (var i = 0; i < 5; i++) {
        for (var j = i; j < 5; j++) {
            document.write('*');
        }
        document.write('<br>');
    }
}

function fn2() {
    for (var i = 0; i < 5; i++) {
        for (var j = 4; i <= j; j--) {
            document.write('*');
        }
        document.write('<br>');
    }
}

function gugu() {
    document.write('<table border=1>');
    document.write('<thead>');
    document.write('<tr>');
    document.write('<th></th>');
    for (let i = 1; i < 10; i++) {
        document.write('<th>');        
        document.write('Multiple' + i);
        document.write('</th>');
    }
    document.write('</tr>');
    document.write('</thead>');

    document.write('<tbody>');
    for (let i = 1; i < 10; i++) {
        document.write('<tr>');
        document.write('<td>' + i + '단</td>');
        for (let j = 1; j < 10; j++) {
            
            document.write('<td>' + i + ' * ' + j + ' = ' + i*j + '</td>');
        }
        document.write('</tr>');
    }
    document.write('<tbody>');
    document.write('</table>');
}