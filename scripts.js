// Первое задание +
function First(q, w, e) {
    return (q - w) / e;
}
let r = First(10, 2, 4);
alert(r);

// Второе задание +
function second(t) {
    let y = 'Квадрат числа: ' + Math.pow(t, 2) + ' Куб числа: ' + Math.pow(t, 3);
    alert(y);
}
second(5);

// Третье задание +
function third(a, b) {
    if (a > b) {
        alert("max: " + a + " min: " + b);
    } else {
        alert("max: " + b + " min: " + a);
    }
}
third(1, 4);

// Четвёртое задание +
let u = [];
function four() {
    let firstEl = prompt('Введите первое число', 0),
        secondEl = prompt('Введите второе число', 0);
    // if (o == "" || o == null || isNaN(o)) break;
    for (let o = firstEl; o <= secondEl; o++) {
        u.push(o);
    }
    alert(u);
}
function five() {
    four();
}
five();

// Пятое задание +
let p;
function isEven(p) {
    if (p % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
alert(isEven(54));

// Шестое задание +
let s = [4, 5, 16, 3, 29, 30, 72, 9],
    d = [],
    i;
function ArrEven(f) {
    for  (i = 0; i < f.length; i++) {
        if (isEven(f[i]) == true) {
            d.push(f[i]);
        }
    }
    alert(d);
}    
ArrEven(s);   

// Седьмое задание - не доделано, ещё со звёздочкой сделать и понять как работает
function pyramid(h) {
        for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i);
        }
        document.write('</br>');
       }
       if (h == Number.isNaN(NaN)) {
           alert('fgergve'); // это просто для проверки это сообщение
           h = '' + 1;
           document.write('' + '\n');
       }
    }
pyramid(9);

   /* if (k == undefined) {}
    } else {
       for (let x = 1; x <= 9; x++) {
    let str = '';
    for (let c = 1; c <= x; c++) {
        str = str + @;
    }
    document.write(str + '<br>');
let str = '';
for (var i = 0; i < 10; i++) {
	str = str + 'x';
	document.write(str + '<br>');
}
}
}
}*/

// Восьмое задание +\- не доделано, ещё перевёрнутый сделать
function triangle(line) {
let space = 4,
    star = 1;
    for (let h = 0; h < line; h++) {
        for (let wsp = 0; wsp < space; wsp++) {
            document.write("&nbsp\n");
        }
        for (let wst = 0; wst < star; wst++) {
            document.write("*");
        }
        space -= 1;
        star += 2;
        document.write("<br>");
    }
}
triangle(5);

// а это перевёрнутый треугольник - честно говоря тоже пока не понимаю как оно работает поэтому нужно будет вернуться к этому

function triangle2(line) {
    let space2 = 4,
        star2 = 1;
        for (let h2 = line; h2 > 0; h2--) {
            for (let wsp2 = space2; wsp2 > 0; wsp2--) {
                document.write("&nbsp\n");
            }
            for (let wst2 = star2; wst2 > 0; wst2--) {
                document.write("*");
            }
            space2 -= 1;
            star2 += 2;
            document.write("<br>");
        }
    }
    triangle2(5);

// Девятое задание + ещё розобраться как работает и понять как максимальное 987 сделать, потому что пока я сама ввела чтобы было только 16 значений, чтобы человек не количество значений вводил а последнее число массива, что оно не превышалось
function getFibArray(N) {
    let arr = [];
    for (let i = 0; i < N; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i-1] + arr[i-2]
        // if (i >= 1000) break; 
    }
    return alert(arr);
    }
    getFibArray(16);

// Десятое задание -
let c = '435',
    v = c.split(''),
    b = 0,
    n = 0;
function Summm(newArr) {
    for (let i = 0; i < newArr.length; i++) {
        b += Number(newArr[i]);
    }
    if (b <= 9) {
        return alert (b);
    } /*else {
        Summm(b);  получается что сейчас массив b и он например 12 получился и чтобы сложить 1+2 нужно тоже создать массив из них, но если их будет очень много то невозможно же будет на каждый новый массив создавать переменную, но как по-другому не понимаю....или в else это запихнуть вот первый блок for, но чтобы была рекурсия куда там вставить опять ссылку на функцию, поэтому пока оставлю это задание
    }*/
    alert(b);
}
Summm(v);

// Одиннадцатое задание +
let m = [2, 343, 54, 6, 45, 7],
    j = 0;
function Rec(arr) {
    alert(arr[j]);
    j++;
    if (j < arr.length) Rec(arr);
}
Rec(m);

// Двенадцатое задание +
function Study(length) {
    let Study = [];
    for (let i = 0; i < length; i++) {
        Study += '*'; // как мы тут к массиву приплюсовываем звёздочки, и не добавляем их в массив а как что
    }
    console.log(Study);
}
let string = [];
let name = prompt('Напишите своё имя'),
    surname = prompt('Напишите свою фамилию'),
    patronymic = prompt('Напишите своё отчество'),
    numberGroup = prompt('Напишите номер группы');
string.push('Домашняя работа: Функции');
string.push('Выполнил: студент гр. ' + numberGroup);
string.push(surname + ' ' + name + ' ' + patronymic);
console.log(string); // если это массив один и просто добавлены строка почему в консоли выводится не в одну строку всё, где тут разделитель на строки?
let long = 0;
for (let i = 0; i < string.length; i++) {
    if (long < string[i].length) { // вот для чего здесь [i]? почему нельзя просто назвать массив и его длинну? string.length вот так и почему нельзя просто написать long = string.length - потому что если так написать то не работает всё, если по сути нам нужно просто определить количество элементов long
        long = string[i].length;
    }
}
long += 2; // а это для чего?
Study(long);
for (let i = 0; i < string.length; i++) {
    let resultString = '*';
    for (let j = 0; j < long; j++) { // и тут конечно не понятно что и как...вроде это как раз первая и замыкающая звёздочка, но не понятно как произошло разделение на строки и как это работает
        if (string[i][j] == undefined) {
            if (j == long-2) { // что это за минут 2??
                resultString += '*';
            } else { resultString += ' ';
            }
        } else {
            resultString += string[i][j];
        }
    }
    console.log(resultString);
}
Study(long);

// Тринадцатое задание - ещё не совсем работает, нужно будет дорабатывать
function symbolCheck(str) {
   let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'ч', 'ц', 'ш', 'щ', 'э', 'ю', 'я', 'ь', 'ъ', 'ы', ''],
    arr_symb = ['!', '#', '$', '%', '&', '?', '+', '=', '~'];

if (str.length < 1) {
    console.log('wrong');
    return false;
}

    for (let i = 0; i < string.length; i++) {
        for (let s = 0; s < arr_ru.length; s++) {
            if (str[i] == arr_ru[s]) {
                return false;
            }
        }
        for (let s = 0; s < arr_symb.length; s++) {
            if (str[i] == arr_symb[s]) {
                return false;
            }
        }
    }
    return true;
}

function checkDomain(str) {
    if (str.length < 2 || str.length > 11)
    return false;
    return true;
}

function checkName(name) {
    if(name.length < 2) {
        return false;
    } else {
        if (symbolCheck(name) == false) {
            return false;
        } else {
            if (name[0] == '.' || name[name.length - 1] == '.')
            return false;
        }
    }
    return true;
}

function checkEmail(email) {
    let index = email.indexOf('@');

    if (index > 0) {
        let part_1 = email.slice(0, index),
            part_2 = email.slice(index+1);

        if (symbolCheck(part_1) == false) {
            return false;
        } else {
            return checkName(part_1);
        }

        if (symbolCheck(part_2) == false) {
            return false;
        } else {
            let indexDot = part_2.indexOf('.');
            if (indexDot > 0) {
                return checkDomain(part_2.slice(indexDot+1));
            } else {
                return false;
            }
        }
    } else {
        res = false;
    }
    return true;
}

if (checkEmail(prompt('Введите email')) == true) {
    console.log('Ok');
} else {
    console.log('Wrong');
}

checkMail(mail);