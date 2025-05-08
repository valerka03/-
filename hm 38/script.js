// 1. Поиск минимального числа в массиве объектов
// Напиши функцию findMinValueInObjects, которая принимает массив объектов,
// где каждый объект содержит числовое свойство `value`.
// Функция должна вернуть наименьшее значение из всех объектов.

function findMinValueInObjects(objects) {
   let minValue = objects[0].value;
   for (let i = 1; i < objects.length; i++) {
      if (objects[i].value < minValue) {
         minValue = objects[i].value;
      }
   }
   return minValue;
}

const objects7 = [{ value: 10 }, { value: 5 }, { value: 20 }]
console.log('7. Минимальное значение:', findMinValueInObjects(objects7))

// 2. Разделение чисел на чётные и нечётные
// Напиши функцию splitEvenOdd, которая принимает массив чисел,
// и возвращает объект с двумя массивами: чётными и нечётными числами.
// Результат должен иметь вид: { even: [...], odd: [...] }
function splitEvenOdd(numbers) {
   const result = { even: [], odd: [] };
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
         result.even.push(numbers[i]);
      } else {
         result.odd.push(numbers[i]);
      }
   }
   return result;
}

const numbers8 = [1, 2, 3, 4, 5]
console.log('8. Чётные и нечётные:', splitEvenOdd(numbers8))
