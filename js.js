//08.09.2021//////////////////////

/**
 * class
 */

// class User {
//     getFUllName() {
//         return `${this.name} ${this.surname}`;
//     }
// }
//
// let user = new User;
// user.name = 'Nick';
// user.surname = "Black";
//
// console.log(user.getFUllName());

// class User {
//
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     getFUllName() {
//         return `${this.name} ${this.surname}`;
//     }
// }
//
// let user = new User('Nick', 'Black');
//
// // user.name = "Dan";
//
// console.log(user.getFUllName());

// class User {
//
//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }
//
//     getFUllName() {
//         return `${this._name} ${this._surname}`;
//     }
//
//     getName() {
//         return this._name;
//     }
// }
//
// let user = new User('Nick', 'Black');
//
// console.log(user.getFUllName());
// console.log(user.getName());


// class User {
//
//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }
//
//     getFUllName() {
//         return `${this._name} ${this._surname}`;
//     }
//
//     getName() {
//         return this._name;
//     }
//
//     setName(name) {
//         this._name = name;
//     }
// }
//
// let user = new User('Nick', 'Black');
//
// console.log(user.getFUllName());
// console.log(user.getName());
// user.setName('Roman')
// console.log(user.getName());


/** Задание 1
 *  Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
 *  surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
 *  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
 *  Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

 Вот так должен работать наш класс:
 */

//  class Worker{
//      constructor(name, surname, rate, days){
//          this._name = name
//          this._surname = surname
//          this._rate = rate
//          this._days = days
//      }

//      getSalary(){
//          return this._days * this._rate
//      }

//      getSurname(){
//          return this._surname
//      }

//      getName(){
//          return this._name
//      }

//      getRate(){
//          return this._rate
//      }

//      getDays(){
//          return this._days
//      }

//      setRate(rate){
//         this._rate = rate
//     }

//      setDays(days){
//         this._days = days
//     }
//  }

//  let worker = new Worker('Иван', 'Иванов', 10, 31);

//  console.log(worker.name); //выведет 'Иван'
//  console.log(worker.surname); //выведет 'Иванов'
//  console.log(worker.rate); //выведет 10
//  console.log(worker.days); //выведет 31
//  console.log(worker.getSalary()); //выведет 310 - то есть 10*31
 

/**
 * Геттеры и сеттеры
 Модифицируйте класс Worker из предыдущей задачи следующим образом:
 сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
 Наш класс теперь будет работать так:
 */


//  let worker = new Worker('И', 'Иов', 20, 25);

//  console.log(worker.getName()); //выведет 'Иван'
//  console.log(worker.getSurname()); //выведет 'Иванов'
//  console.log(worker.getRate()); //выведет 10
//  console.log(worker.getDays()); //выведет 31
//  console.log(worker.getSalary()); //выведет 310 - то есть 10*31
 

/**
 * Модифицируйте класс Worker из предыдущей задачи следующим образом:
 * для свойства rate и для свойства days сделайте еще и методы-сеттеры.
 * Наш класс теперь будет работать так:
 **/
//  let worker = new Worker('Иван', 'Иванов', 10, 31);

//  console.log(worker.getRate()); //выведет 10
//  console.log(worker.getDays()); //выведет 31
//  console.log(worker.getSalary()); //выведет 310 - то есть 10*31

//  //Теперь используем сеттер:
//  worker.setRate(20); //увеличим ставку
//  worker.setDays(10); //уменьшим дни
//  console.log(worker.getSalary()); //выведет 200 - то есть 20*10
 


/**
 *  Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 *  который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 *  который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву 
 *  заглавной и метод ucWords,
 *  который принимает строку и делает заглавной первую букву каждого слова этой строки.

 Наш класс должен работать так:
*/

//  class MyString{
//      reverse(str){
//         str = str.split("")
//         str = str.reverse()
//         str = str.join("")
//         return str
//      }

//      ucFirst(str){
//         str = str.split("")
//         str[0] = str[0].toUpperCase()
//         str = str.join("")
//         return str
//      }

//      ucWords(str){
//         str = str.split(" ")
//         for(let i = 0; i < str.length; i++){
//             str[i] = this.ucFirst(str[i])    
//         }
//         str = str.join(" ")
//         return str
//      }
//  }
 
//  let str = new MyString();

//  console.log(str.reverse('abcde')); //выведет 'edcba'
//  console.log(str.ucFirst('abcde')); //выведет 'Abcde'
//  console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

//hw1
//  class Circle{
//     constructor(radius){
//         this._radius = radius
//     }

//     getRadius(){
//         return this._radius
//     }

//     setRadius(radius){
//         this._radius = radius
//     }

//     getDiametr(){
//         return this._radius * 2
//     }

//     getArea(){
//         return Math.PI * Math.pow(this._radius, 2)
//     }

//     getPerimeter(){
//         return 2 * Math.PI * this._radius
//     }
//  }

// let cirlce = new Circle(2)

// console.log(cirlce.getRadius())
// console.log(cirlce.getDiametr())
// console.log(cirlce.getArea())
// console.log(cirlce.getPerimeter())
// cirlce.setRadius(5)
// console.log(cirlce.getRadius())
// console.log(cirlce.getDiametr())
// console.log(cirlce.getArea())
// console.log(cirlce.getPerimeter())
 

//hw2

// class HtmlElement{
//     constructor(name, isClosed, text, masAtribut, masStyles, masTags){
//         this._name = name
//         this._isClosed = isClosed
//         this._text = text
//         this._masAtribut = masAtribut
//         this._masStyles = masStyles
//         this._masTags = masTags
//     }

//     setAtribut(){
//         let atribut = " "
//         for(let i = 0; i < this._masAtribut.length; i++){
//             atribut += this._masAtribut[i].name + "=" 
//             + this._masAtribut[i].value + " "
//         }
//         return atribut
//     }

//     setStyle(){
//         let style = "style="
//         for(let i = 0; i < this._masStyles.length; i++){
//             style += this._masStyles[i].name + ":" + this._masStyles[i].value + ";"
//         }
//         return style
//     }

//     addInEnd(tag){
//         this._masTags.push(tag)
//     }

//     addInBegin(tag){
//         this._masTags.unshift(tag)
//     }

//     getHtml(){
//         let codeHtml = "<" + this._name + this.setAtribut() 
//         + this.setStyle() + ">" + this._text
//         for(let i = 0; i < this._masTags.length; i++){
//             codeHtml += this._masTags[i].getHtml()
//         }
//         if(this._isClosed === true){
//             codeHtml += "</" + this._name + ">" 
//         }
//         return codeHtml
//     }
// }

// let divWrapper = new HtmlElement("div", true, "", [{
//     name: "id", 
//     value: "wrapper"
// }], [{
//     name: "display",
//     value: "flex"
// }], [])

// let divWidth = new HtmlElement("div", true, "", [], [{
//     name: "width",
//     value: "300px"
//     }, 
//     {
//     name: "margin",
//     value: "10px"
//     }], []) 

// let h3 = new HtmlElement("h3", true, "What is Lorem Ipsum?", [], [], [])
// let img = new HtmlElement("img", false, "", [{
//         name: "src",
//         value: "lipsum.jpg"
//     },
//     {
//         name: "alt",
//         value: `"Lorem Ipsum"`
//     }
// ], [{
//     name: "width",
//     value: "100%"
// }], [])

// let p = new HtmlElement("p", true, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", [], [{
//     name: "text-align",
//     value: "justify"
// }], [])

// let a = new HtmlElement("a", true, "More...", [{
//     name: "href",
//     value: "https://www.lipsum.com/"
//     }, 
//     {
//     name: "target",
//     value: "_blank"
// }], [], [])

// divWrapper.addInBegin(divWidth)
// divWidth.addInBegin(h3)
// divWidth.addInEnd(img)
// divWidth.addInEnd(p)
// p.addInEnd(a)
// divWrapper.addInEnd(divWidth)

// document.write(divWrapper.getHtml())

//hw3

// class CssClass {
//     constructor(name, masStyles){
//         this._name = name
//         this._masStyles = masStyles
//     }

//     setStyle(style){
//         this._masStyles.unshift(style)
//     }

//     deleteStyle(style){
//         for(let i = 0; i < this._masStyles.length; i++){
//             if(style.name === this._masStyles[i].name && style.value === this._masStyles[i].value){
//                 this._masStyles.splice(i, 1)
//             }
//         }
//     }

//     getCss(){
//         let css = "." + this._name + " {"
//         for(let i = 0; i < this._masStyles.length; i++){
//             css += this._masStyles[i].name + ": " + this._masStyles[i].value + ";"
//         }
//         return css += "}"
//     }
// }

// let classWrap = new CssClass("wrap", [{
//     name: "display",
//     value: "flex"
// }])

// let classBlock = new CssClass("block", [{
//     name: "width",
//     value: "300px"
// }, {
//     name: "margin",
//     value: "10px"
// }])

// // classBlock.setStyle({
// //     name: "color",
// //     value: "red"
// // })

// // classBlock.deleteStyle({
// //     name: "width",
// //     value: "300px"
// // })

// let classImg = new CssClass("img", [{
//     name: "width",
//     value: "100%"
// }])

// let classText = new CssClass("text", [{
//     name: "text-align",
//     value: "justify"
// }])

//hw4

// class CssClass {
//     constructor(name, masStyles){
//         this._name = name
//         this._masStyles = masStyles
//     }

//     setStyle(style){
//         this._masStyles.unshift(style)
//     }

//     deleteStyle(style){
//         for(let i = 0; i < this._masStyles.length; i++){
//             if(style.name === this._masStyles[i].name && style.value === this._masStyles[i].value){
//                 this._masStyles.splice(i, 1)
//             }
//         }
//     }

//     getCss(){
//         let css = "." + this._name + "{"
//         for(let i = 0; i < this._masStyles.length; i++){
//             css += this._masStyles[i].name + ": " + this._masStyles[i].value + ";"
//         }
//         return css += `} `
//     }
// }

// let classWrap = new CssClass("wrap", [{
//     name: "display",
//     value: "flex"
// }])

// let classBlock = new CssClass("block", [{
//     name: "width",
//     value: "300px"
// }, {
//     name: "margin",
//     value: "10px"
// }])

// let classImg = new CssClass("img", [{
//     name: "width",
//     value: "100%"
// }])

// let classText = new CssClass("text", [{
//     name: "text-align",
//     value: "justify"
// }])

// class HtmlElement{
//     constructor(name, isClosed, text, masAtribut, masStyles, masTags){
//         this._name = name
//         this._isClosed = isClosed
//         this._text = text
//         this._masAtribut = masAtribut
//         this._masStyles = masStyles
//         this._masTags = masTags
//     }

//     setAtribut(){
//         let atribut = " "
//         for(let i = 0; i < this._masAtribut.length; i++){
//             atribut += this._masAtribut[i].name + "=" 
//             + this._masAtribut[i].value + " "
//         }
//         return atribut
//     }

//     setStyle(){
//         let style = "style="
//         for(let i = 0; i < this._masStyles.length; i++){
//             style += this._masStyles[i].name + ":" + this._masStyles[i].value + ";"
//         }
//         return style
//     }

//     addInEnd(tag){
//         this._masTags.push(tag)
//     }

//     addInBegin(tag){
//         this._masTags.unshift(tag)
//     }

//     getHtml(){
//         let codeHtml = "<" + this._name + this.setAtribut() 
//         + this.setStyle() + ">" + this._text
//         for(let i = 0; i < this._masTags.length; i++){
//             codeHtml += this._masTags[i].getHtml()
//         }
//         if(this._isClosed === true){
//             codeHtml += "</" + this._name + ">" 
//         }
//         return codeHtml
//     }
// }

// let divWrapper = new HtmlElement("div", true, "", [{
//     name: "id", 
//     value: "wrapper"
// }, {
//     name: "class",
//     value: "wrap"
// }], [], [])

// let divWidth = new HtmlElement("div", true, "", [{
//     name: "class",
//     value: "block"
// }], [], []) 

// let h3 = new HtmlElement("h3", true, "What is Lorem Ipsum?", [], [], [])
// let img = new HtmlElement("img", false, "", [{
//         name: "src",
//         value: "lipsum.jpg"
//     },
//     {
//         name: "alt",
//         value: `"Lorem Ipsum"`
//     }, {
//         name: "class",
//         value: "img"
//     }], [], [])

// let p = new HtmlElement("p", true, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", [{
//     name: "class",
//     value: "text"
// }], [], [])

// let a = new HtmlElement("a", true, "More...", [{
//     name: "href",
//     value: "https://www.lipsum.com/"
//     }, 
//     {
//     name: "target",
//     value: "_blank"
// }], [], [])

// divWrapper.addInBegin(divWidth)
// divWidth.addInBegin(h3)
// divWidth.addInEnd(img)
// divWidth.addInEnd(p)
// p.addInEnd(a)
// divWrapper.addInEnd(divWidth)

// let masClassStyles = [classBlock, classImg, classWrap, classText]

// class HtmlBlock{
//     constructor(masClassStyles, rootElement){
//         this._masClassStyles = masClassStyles
//         this._rootElement = rootElement
//     }

//     getCode(){
//         let code = "<style>"
//         for(let i = 0; i < this._masClassStyles.length; i++){
//             code += this._masClassStyles[i].getCss()
//         }
//         return code + "</style>" + this._rootElement.getHtml()
//     }
// }

// let myHtmlBlock = new HtmlBlock(masClassStyles, divWrapper)

// document.write(myHtmlBlock.getCode())

//pz1

// class PrintMachine {
//     constructor(size, color, family){
//         this._size = size
//         this._color = color
//         this._family = family
//     }

//     print(text){
//         let pText = "<p style= font-size:" + this._size + ";" + "color:" + this._color + ";" + "font-family:" + this._family + ";" + ">" + text + "</p>"
//         document.write(pText)
//     }
// }

// let myText = new PrintMachine("25px", "green", "system-ui")
// myText.print("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")

//pz2

// class News {
//     constructor(title, text, masTags, dateOfPublic){
//         this._title = title
//         this._text = text
//         this._masTags = masTags
//         this._dateOfPublic = new Date(dateOfPublic)
//     }

//     print(){
//         let textOfNews = "<h1>" + this._title + "</h1>"
//         let HoursAfterPublic = (Date.now() - this._dateOfPublic.getTime()) / 1000 / 3600
//         if(HoursAfterPublic <= 24){
//             textOfNews += "<p>Сегодня</p>"
//         }
//         else if(24 < HoursAfterPublic && HoursAfterPublic <=  24 * 7){
//             let day = Math.floor(HoursAfterPublic / 24)
//             textOfNews += "<p>" + day + " дней назад</p>"
//         }
//         else if(HoursAfterPublic > 24 * 7){
//             let month = this._dateOfPublic.getMonth() + 1
//             textOfNews += "<p>" + this._dateOfPublic.getDate() + "." + month + "." + this._dateOfPublic.getFullYear() + "</p>"
//         }
//         textOfNews += "<p>" + this._text + "</p><p>"
//         for(let i = 0; i < this._masTags.length; i++){
//             textOfNews += "<span>#" + this._masTags[i] + " </span>"
//         }
//         textOfNews += "</p>"
//         document.write(textOfNews)
//     }
// }

// let myNews = new News("What is Lorem Ipsum?", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", ["lorem", "ipsum", "text"], "09.09.2021")
// myNews.print()

//pz3

// class News {
//     constructor(title, text, masTags, dateOfPublic){
//         this._title = title
//         this._text = text
//         this._masTags = masTags
//         this._dateOfPublic = new Date(dateOfPublic)
//     }

//     getThisTime(){
//         return this._dateOfPublic.getTime()
//     }

//     getLengthMasTags(){
//         return this._masTags.length
//     }

//     print(){
//         document.write(this.htmlCode())
//     }

//     htmlCode(){
//         let textOfNews = `<div class="news"><h2>` + this._title + "</h2>"
//         let HoursAfterPublic = (Date.now() - this._dateOfPublic.getTime()) / 1000 / 3600
//         if(HoursAfterPublic <= 24){
//             textOfNews += `<p class="date">Сегодня</p>`
//         }
//         else if(24 < HoursAfterPublic && HoursAfterPublic <=  24 * 7){
//             let day = Math.floor(HoursAfterPublic / 24)
//             textOfNews += `<p class="date">${day} дней назад</p>`
//         }
//         else if(HoursAfterPublic > 24 * 7){
//             let month = this._dateOfPublic.getMonth() + 1
//             textOfNews += "<p class=date>" + this._dateOfPublic.getDate() + "." + month + "." + this._dateOfPublic.getFullYear() + "</p>"
//         }
//         textOfNews += "<p class=text>" + this._text + "</p><p class=tags>"
//         for(let i = 0; i < this._masTags.length; i++){
//             textOfNews += "<span>#" + this._masTags[i] + " </span>"
//         }
//         textOfNews += "</p></div>"
//         return textOfNews
//     }
// }

// class ListNews{
//     constructor(masNews){
//         this._masNews = masNews
//     }

//     getLengthNews(){
//         return this._masNews.length
//     }

//     printAllNews(){
//         for(let i = 0; i < this.getLengthNews(); i++){
//             this._masNews[i].print()
//         }
//     }

//     addNews(newNews){
//         this._masNews.unshift(newNews)
//     }

//     deleteNews(numberOfNews){
//         this._masNews.splice(numberOfNews, 1)
//     }

//     sortOfDate(){
//         this._masNews.sort((a, b) => a.getThisTime() < b.getThisTime() ? 1 : -1)
//     }

//     findNewsToTag(myTag){
//         let newMas = []
//         for(let i = 0; i < this.getLengthNews(); i++){
//             for(let j = 0; j < this._masNews[i].getLengthMasTags(); j++){
//                 if(this._masNews[i]._masTags[j] === myTag){
//                     newMas.unshift(this._masNews[i])
//                     break
//                 }
//                 else{
//                     continue
//                 }
//             }
//         }
//         return newMas
//     }
        
// }

// let myNews = new News("What is Lorem Ipsum?", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", ["lorem", "ipsum", "text"], "09.18.2021")

// let myNewsTwo = new News("New World", "123. Hello. And why?", ["people", "ipsum", "education"], "09.13.2021")

// let myNewsThree = new News("Iphone 13", "This is my Phone - Iphone.", ["apple", "iphone"], "09.14.2021")

// let myNewsFour = new News("Iphone 11", "Future is here.", ["apple", "iphone"], "07.14.2021")

// let myNewsFive = new News("Iphone 10", "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", ["iphone"], "07.14.2020")

// let myListNews = new ListNews([])
// myListNews.addNews(myNews)
// myListNews.addNews(myNewsTwo)
// myListNews.addNews(myNewsThree)
// console.log(myListNews.getLengthNews())
// myListNews.addNews(myNewsFour)
// myListNews.addNews(myNewsFive)
// myListNews.deleteNews(0)
// myListNews.sortOfDate()
// myListNews.printAllNews()
// let filteredListNews = new ListNews(myListNews.findNewsToTag("education"))
// document.write("<br><br><br><h3>Finded:</h3>")
// filteredListNews.printAllNews()

// let plus = document.getElementById("plus")
// plus.addEventListener("click", () => {
//     setTimeout(() => {
//         let newNews = new News(prompt("Тема"), prompt("Текст новости"), [prompt("Хэштег 1"), prompt("Хэштег 2")], prompt(`Введите дату публицкации в формате "мм.дд.гггг"`))
//         plus.insertAdjacentHTML("afterend", newNews.htmlCode())
//     }, 250)
// })

// document.addEventListener("click", (event) => {
//     let targetElement = event.target
//     console.log()
//     changeText(targetElement)
// })

// function changeText(targetElement){
//     if(targetElement.getAttribute("class") === "text"){
//         let oldText = targetElement.textContent
//         targetElement.textContent = prompt("Измените текст", oldText)
//         console.log(targetElement.textContent)
//         if(targetElement.textContent === ""){
//             targetElement.textContent = oldText
//         }
//     }
// }

let year = 0

setInterval(() => {
        let textYear = document.getElementsByClassName("year")[0]
        year = 0
        textYear.textContent = year
        let answer = document.getElementsByClassName("answer")[0]
        answer.style.cssText = `
        display: none;`
        let text = document.getElementsByClassName("text")[0]
        text.style.cssText = `
        display: none;`
}, 5000)

let hard = document.getElementsByClassName("hard")[0]
hard.addEventListener("click", (event) => {
    let nowTime = new Date()
    year++
    let textYear = document.getElementsByClassName("year")[0]
    textYear.textContent = year
    console.log(year)
    if(nowTime.getHours() >= 23){
        let answer = document.getElementsByClassName("answer")[0]
        answer.style.cssText = `
        display: block;`
    } else if(year === 21){
        let answer = document.getElementsByClassName("answer")[0]
        answer.style.cssText = `
        display: block;`
    } else if(year > 21){
        let answer = document.getElementsByClassName("answer")[0]
        answer.style.cssText = `
        display: none;`
    } else if(year === 10){
        let text = document.getElementsByClassName("text")[0]
        text.style.cssText = `
        display: block;`
    } else if(year > 10){
        let text = document.getElementsByClassName("text")[0]
        text.style.cssText = `
        display: none;`
    }
    console.log(nowTime.getHours())
})