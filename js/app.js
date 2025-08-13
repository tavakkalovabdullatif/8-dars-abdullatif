// 1. Har bir so‘zni katta harf bilan yozish
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() word.slice(1).toLowerCase())
//     .join(" ");
// }
// console.log(capitalizeWords("salom dunyo")); // "Salom Dunyo"

// // 2. Massivdagi har bir ismni katta harfga o‘tkazing
// function toUpperNames(names) {
// return names.map(names => names.toUpperCase());
// const names = ["ali", "vali", "hasan"];
// console.log(toUpperNames(names)); 
// }


// // 3. Massivda nechta musbat son borligini toping
// function countPositive(numbers) {
//   return numbers.filter( () => {
//     return numbers.startsWidth("-")
//   })
//   const numbers = [1,2,-3,0,12]
//   console.log(countPositive(numbers))
// }


// // 4. Stringdagi bo‘sh joylarni olib tashlang
// function removeSpaces(str) {
//   return str.trim().replaceAll(' ', '');
// }
// console.log(removeSpaces("  salom   dunyo  ")); // "salomdunyo"

// // 5. Berilgan sonlar orasidan biror juft son bor-yo‘qligini tekshiring
// function hasEvenNumber(arr) {
//   return arr.some(num => num % 2 === 0);
// }
// console.log(hasEvenNumber([1, 3, 5, 8])); // true

// // 6. Massivdagi 0 qiymatli elementlarni olib tashlang
// function removeZeros(arr) {
//   return arr.filter(num => num !== 0);
// }
// console.log(removeZeros([0, 1, 2, 0, 3])); // [1, 2, 3]

// // 7. Har bir so‘zni teskari qilib qaytaring
// function reverseWords(str) {
//   return str.split(" "))
//             .map(word => word.split('').reverse().join(''))
//             .join(" ");
// }
// console.log(reverseWords("salom dunyo")); // "molas oynud"

// // 8. Faqat 3 harfli so‘zlarni qoldiring
// function threeLetterWords(words) {
//   return words.filter(word => word.length === 3);
// }
// console.log(threeLetterWords(["sal", "olma", "ko‘r", "bor"])); // ["sal", "ko‘r", "bor"]

// // 9. Massivdagi sonlarni 2 ga ko‘paytiring
// function doubleNumbers(numbers) {
//   return numbers.map(num => num * 2);
// }
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

// // 10. Matndagi har bir harfni alohida massivga oling
// function splitChars(str) {
//   return str.split('');
// }
// console.log(splitChars("hello")); // ['h','e','l','l','o']

// // 11. Massivdagi butun sonlarni saqlang
// function onlyIntegers(arr) {
//   return arr.filter(Number.isInteger);
// }
// console.log(onlyIntegers([1.5, 2, 3.1, 4])); // [2, 4]

// // 12. Massivdagi har bir elementga uning indexini qo‘shing
// function addIndex(arr) {
//   return arr.map((val, idx) => val + idx);
// }
// console.log(addIndex([10, 20, 30])); // [10, 21, 32]

// // 13. Stringda nechta 'a' harfi borligini sanang
// function countA(str) {
//   return str.toLowerCase()
//             .split('')
//             .filter(char => char === 'a')
//             .length;
// }
// console.log(countA("Ananas")); // 3

// // 14. Har bir so‘zdan faqat birinchi harfni oling
// function getInitials(str) {
//   return str.split(' ')
//             .map(word => word[0])
//             .join('');
// }
// console.log(getInitials("Hello World From JS")); // "HWFJ"

// // 15. Ichma-ich massivlarni tekislashtiring
// function flattenArray(arr) {
//   return arr.flat();
// }
// console.log(flattenArray([1, [2, 3], [4, 5]])); // [1,2,3,4,5]

// // 17. Stringdagi raqamlarni sonlarga aylantiring
// function extractNumbers(str) {
//   return str.split('')
//             .filter(char => !isNaN(char) && char !== ' ')
//             .map(Number);
// }
// console.log(extractNumbers("ab1c3d2")); // [1,3,2]

// // 18. Har bir so‘zni teskari qilib, oxirgi so‘zni katta harf bilan qaytaring
// function specialReverse(str) {
//   let words = str.split(' ')
//                  .map(word => word.split('').reverse().join(''));
//   words[words.length - 1] = words[words.length - 1].toUpperCase();
//   return words;
// }
// console.log(specialReverse("salom dunyo js")); // ['molas', 'oynud', 'SJ']

// // 19. 2-qavatgacha bo‘lgan ichki massivlarni flatten qiling (flatMap bilan)
// function flatMapExample(arr) {
//   return arr.flatMap(item => Array.isArray(item) ? item : [item]);
// }
// console.log(flatMapExample([1, [2, [3, 4]], 5])); // [1,2,[3,4],5]

// // 20. Massivda barcha qiymatlar son ekanligini tekshiring
// function allNumbers(arr) {
//   return arr.every(item => typeof item === 'number');
// }
// console.log(allNumbers([1, 2, 3])); // true