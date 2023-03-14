// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.