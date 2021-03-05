    // Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

class Circle{
    constructor(radius) {
        this.radius = radius;
        console.log(radius);
    }

    get Length() {
        console.log(this._calculateLength);
    }

    get calculateArea() {
        return this._calculateArea;
    }

    get radius(){
        return this._radius;
        console.log(this._radius);
    }

    get diametr(){
        return this._radius * 2;
        console.log(this._radius * 2);
    }

    set radius(radius) {
        this._radius = radius;
        console.log(this._radius);
    }
  
    calculateLength() {
        console.log (2 * Math.PI * this._radius);
    }

    calculateArea () {
        console.log(Math.PI * this._radius**2);
    } 
}

const objectCircle = new Circle(1);

objectCircle.calculateLength();
objectCircle.calculateArea();



        // Реализовать класс Employee, описывающий работника, и создать массив работников банка

class Employee{
    constructor(name, gender, age, specialization) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.specialization = specialization;
    }

    get newArray(){

    }

    set newArray(characteristic){

    }

}

const setEmployee = new Employee(John, man, 30, programer);


        // Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml()



        // Создать объект класса EmpTable и вывести на экран результат работы метода getHtml()

