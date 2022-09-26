interface DropDownItem<T> {
    value: T;
    selected: boolean;
}

const emails: DropDownItem<string>[] = [
    {value: "naver.com", selected: true},
    {value: "gmail.com", selected: false},
    {value: "hanmail.com", selected: false}
];

const numberOfProducts: DropDownItem<number>[] = [
    { value: 1, selected: true},
    { value: 2, selected: false},
    { value: 3, selected: false},
]

function createDropdownItem<T extends { toString: Function }>(
    item: DropDownItem<T>
):HTMLOptionElement {
    const option = document.createElement("option");
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

emails.forEach(function(email){
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector("#email-dropdown");
    selectTag?.appendChild(item)
});
numberOfProducts.forEach(function(products){
    const item = createDropdownItem<number>(products)
});




// interface ReadOnly {
//     readonly test: string;
// }

// let params: ReadOnly = {
//     test: "3333"
// };
// console.log(params)
//params.test ="test4"; //readonly로 인해서 변경이 불가능함.




// interface TestType {
//     test: string;
//     test2?: number;  //? 를 통해서 옵션화
// }

// let testProp = {
//     test: "tttt"
// };
// function testFunc(param: TestType) {
//     console.log(param.test);
// }
// testFunc(testProp);


// interface personAge {
//     age: number;
// } //인터페이스를 통해서 인자를 조금더 명시적으로 표시되며 재사용이 가능하다. 

// function logAge(obj: personAge){
//     console.log(obj.age);
// }
// let person = {name: "Capt", age: 28}
// logAge(person);


// let olimpic_newgame = [
//     {
//       name: '쇼트트랙', 
//       type: '혼성 계주'
//     }, 
//     true
//   ];
//   function egg(objj: {age: boolean|string}){
//     console.log(objj.age)
//   }
//   //console.log( olimpic_newgame );
//   console.log( olimpic_newgame[0]);
//   egg(olimpic_newgame[0]);
// interface PersonWithBirth extends Person {
//     birth: Date
// }

// type PersonWithBirth = Person & {birth:Data}




// const useMultipleGeneric = <T,U> (v:T, u:U): [T, U] =>{
//     return [v,u];
// }
// useMultipleGeneric('string', 123);
// console.log(useMultipleGeneric('string',123))

// const identify = <T>(arg: T[]):T[] => {
//     console.log(arg.length)
//     return arg;
// }
// identify([1,2,3]);




// const identify = (arg: number): number => {
//     return arg;
// }
// const identify = (arg: any) any => {
//     return arg;
// }




//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// interface Point{
//     x: number;
//     y: number;
// };
// class Grid {
//     static origin: Point = {
//         x: 0,
//         y: 0,
//     };
//     scale: number;
//     constructor(scale: number){
//         this.scale = scale;
//     }
//     calcDistanceFromOrigin(point: Point):number {
//         let dx = point.x - Grid.origin.x;
//         let dy = point.y - Grid.origin.y;
//         return Math.sqrt((dx*dx)+(dy*dy)/this.scale);
//     }
// }
// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);
// const point: Point = {
//     x: 10,
//     y: 10,
// };
// console.log(grid1.calcDistanceFromOrigin(point))
// console.log(grid2.calcDistanceFromOrigin(point))

// interface Point {
//     x: number;
//     y: number;
// }
// class Grid {
//     static origin: Point = {
//         x: 0,
//         y: 0,
//     };
//     
//     constructor(scale: number) {
//         this.scale = scale;
//     }
//     calcDistanceFromOrigin(point: Point): number {
//         let dx = point.x - Grid.origin.x;
//         let dy = point.y - Grid.origin.y;
//         return Math.sqrt((dx * dx) + (dy * dy) / this.scale);
//     }
// }
// let grid1 = new Grid(1.0); // 1x scale
// let grid2 = new Grid(5.0); // 2x scale
// const point: Point = {
//     x: 10,
//     y: 10,
// };
// console.log(grid1.calcDistanceFromOrigin(point)); // 14.142135623730951
// console.log(grid2.calcDistanceFromOrigin(point)); // 10.954451150103322

// class Person {
//     constructor(readonly name: string){} //readonly 수정이 1회만됨. 한번들어오면 바뀌지 않음.
//     qreet() {
//         console.log(`my name is ${this.name}`);
//     }
// }
// const person = new Person ('heecheolman');
// person.qreet();





// abstract class Animal{

//     abstract makeSound(): void;

//     move(): void {
//         console.log("move move move!");
//     }
// }

// class Dog extends Animal {
//     makeSound(): void{
//         console.log("Doooooog");
//     }
// }

// const dog = new Dog();
// dog.makeSound();
// dog.move();



// class Animal{
//     constructor(public name: string, protected age: number, private breed: string){
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     protected talk (){
//         console.log(`this anima's name is ${this.name}`);
//     }
// }
// const animal = new Animal("Ruby", 2, 'tlrhfmwkqmwhd');

// animal.talk();// protected에 의해 에러발생

// class Dog extends Animal{
//     constructor(name:string, age: number, breed: string){
//         super(name, age, breed);

//         this.talk();
//         console.log(this.age);
//         console.log(this.breed); //private에 의해 에러발생
//     }
// }


// class Animal {
//     name: string;
//     constructor(name: string){
//         this.name= name;
//     }
//     talk(){
//         console.log(`thing animal's name is ${this.name}`);
//     }
// }

// const animal = new Animal("Ruby");
// animal.talk();

// class ProductService3_8{
//     getProducts(){
//         console.log(`Getting all products`);
//     }
//     getProducts(id: number){
//         console.log(`Getting the product info for ${id}`);
//     }
// }

// const prodService = new ProductService3_8();
// prodService.getProducts(123); //들어가는 변수값에 따라서 오버로딩의 매서드가 정해짐. 다르면 오류가 생김.
// prodService.getProducts();

// class ProductService3_9{
//     getProducts();
//     getproducts(id: number);

//     getProducts(id?: number){
// //         typeof id === 'number' ? console.log(`Getting the product info for ${id}`):console.log(`Getting all Products`)    
// //     }
// // }

// const prodService = new ProductService3_9();
// prodService.getProducts(123);
// prodService.getProducts();

// interface Product3_10{
//     id: number;
//     description: string;
// }

// class ProductServie3_10{
//     getProducts(description: string): Product3_10[];
//     getProducts(id: number): Product3_10;
//     getProducts(product: number | string): Product3_10[]| Product3_10{
//         if(typeof product ==='number'){
//             console.log(`Getting the product info for id ${product}`);
//             return {id: product, description: 'great product'};
//         }else if(typeof product ==='string'){
//             console.log(`Getting product with description ${product}`);
//             return [{id: 123, description: 'blue jeans'}, {id: 789, description: 'blue jeans'}];
//         }else {
//             return{
//                 id: -1,
//                 description: 'Error: getProducts() accept only number or string as args'
//             }
//         }
//     }
// }

// const prodService3_10 = new ProductServie3_10();

// console.log(prodService3_10.getProducts(123));
// console.log(prodService3_10.getProducts('blue jeans'));


// // class Product3_11 {
//     id: number;
//     description: string;
//     constructor();
//     constructor(id: number);
//     constructor(id: number, description: string);
//     constructor(id?: number, description?: string){

//     }
// }

// interface ProductProperties3_12{
//     id?: number,
//     description?: string;
// }

// class Product3_12{
//     id: number;
//     description: string;
//     constructor(properties?: ProductProperties3_12){

//     }
// }



// abstract class companyA {
//     constructor(public name: string){};
//         chageAddress(newAddress: string){
//             console.log(`Changing address to ${newAddress}`);
//         }
//         giveDayOff(){
//             console.log(`Giving a day off to ${this.name}`);
//         }

//         promote(percent: number){
//             this.giveDayOff();
//             this.increasePay(percent);
//         }
//         abstract increasePay(percent: number): void;
// }
// class Employee3_6 extends companyA{
//     increasePay(percent: number){
//         console.log(`Increasing the salary of ${this.name} by ${percent}%`);
//     }
// }
// class Contractor3_6 extends companyA{
//     increasePay(percent: number){
//         console.log(`Increasing the hourly rate of ${this.name} by ${percent}%`);
//     }
// }

// const workers3_7: companyA[]=[];

// workers3_7[0] = new Employee3_6('John');
// workers3_7[1] = new Contractor3_6('Mary');


// workers3_7.forEach(worker => worker.promote(5));




// class AppState{
//     counter = 0;
//     private static instanceRef: AppState;
//     private constructor() {}
//     static getInstance(): AppState{
//         if(AppState.instanceRef === undefined){
//             AppState.instanceRef = new AppState();
//         }
//         return AppState.instanceRef;
//     }
// }

// const appState1 =AppState.getInstance();
// const appState2 =AppState.getInstance();


// appState1.counter++;
// appState1.counter++;
// appState1.counter++;
// appState2.counter++;
// appState2.counter++;

// console.log(appState1);
// console.log(appState2);
