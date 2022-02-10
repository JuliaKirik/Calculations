
// 1. Задается сторона квадрата, найти его периметр

let side = +prompt (`Введите сторону квадрата`);
let perimetr = side * 4;
console.log (`Периметр: ${perimetr}`);

// 2. Задаётся длина ребра куба. Найти объем куба и площадь его боковой поверхности

let edge = +prompt (`Введите сторону квадрата`);
let volume = edge ** 3; 
console.log (`Объем: ${volume}`);

let squareSideCube = 4 * (edge **2);
console.log (`Площадь боковой поверхнотси куба: ${squareSideCube}`);

// 3. Задаётся радиус окружности. Найти длину окружности и площадь круга
let radius = +prompt (`Введите радиус окружности`);
let circumference = 2 * Math.PI * radius;
console.log (`Длина окружности: ${circumference}`);

let squareCircle = Math.PI * (radius **2);
console.log (`Площадь круга: ${squareCircle}`);

// 4. Задаются объем и масса вещества. Определить плотность материала этого вещества
let volumeSubstance = +prompt (`Введите объем`);
let massSubstance = +prompt (`Введите массу`);
let density = massSubstance / volumeSubstance;
console.log (`Плотность материала: ${density}`);

// 5. Известны количество жителей в государстве и площадь его территории (в км2). Определить плотность населения в этом государстве.
let amountCitizen = +prompt (`Введите колличество жителей`);
let squareTerritory = +prompt (`Введите площадь государства в км2`);
let populationDensity = amountCitizen / squareTerritory; 
console.log (`Плотность населения: ${populationDensity} чел/км*2`);

// 6. Даны катеты прямоугольного треугольника. Найти его гипотенузу.
let cathetus1 =  +prompt (`Введите первый катет`);
let cathetus2 =  +prompt (`Введите второй катет`);
let hypotinuse = Math.sqrt (cathetus1 **2 + cathetus2 **2);
console.log (`Гипотенуза: ${hypotinuse}`);

// 7. Рассчитать значение y, при любых введённых значениях а
let a = +prompt (`Введите число`);
let y = (a**2 + 10) / Math.sqrt (a**2 +1);
console.log (`Значение у: ${y}`);