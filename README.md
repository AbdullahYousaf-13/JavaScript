# JavaScript
<br>

## Theory
<br>

### Html
    Controls structure of your web page.

### CSS
    Controls presentation /design

### JS
    Adds behaviour and interactivity

### Key Points

- Methods/Functions/Behaviours:
    - Have `()` at the end
    - Parameters can be added in `()`
    - Eg: `myCar.drive()`
- Properties:
    - Bits of info about car
    - Eg: `myCar.maxspeed`

<br><br>



### USing Chrome Developer Tools
    To Open: F12
![Alt text](Images/image-1.png)

---
---

<br><br>



## Codes With Explanations
<br>

### Hello World

#### Code

    <!-- <!DOCTYPE html> -->
    
    <html>
        
        <head>
            <title>
                Hello, World!
            </title>
        </head>
        
        <body>
            <script>
                alert("Hello, World!");
            </script>
        </body>

    </html>

---
<br>



### Simple HTML & CSS Webpage

#### Code

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Simple Web Page</title>
        <style>
            /* CSS styles go here */
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
            }
            
            header {
                background-color: #333;
                color: #fff;
                text-align: center;
                padding: 20px;
            }
            
            nav {
                background-color: #444;
                text-align: center;
                padding: 10px;
            }
            
            nav a {
                text-decoration: none;
                color: #fff;
                margin: 10px;
            }
            
            nav a:hover {
                text-decoration: underline;
            }
            
            .container {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            }
        </style>
    </head>
    <body>
        <header>
            <h1>Simple Web Page</h1>
        </header>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
        <div class="container">
            <h2>Welcome to Our Website</h2>
            <p>This is a simple HTML and CSS web page.</p>
        </div>
    </body>
    </html>

---
<br>



### HTML & CSS Webpage with Onclick Button

#### Code

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Simple Web Page with Show More</title>
        <style>
            body {
                background: #eee;
            }

            #content {
                width: 400px;
                background: #fff;
                padding: 20px;
                padding-top: 0px;
                font-family: calibar;
                font-size: 18px;
                color: #444;
                margin: 0 auto;

                max-height: 240px;;
                overflow: hidden;

                /*Set Transitions up*/
                -webkit-transition: max-height 0.7s;
                -moz-transition: max-height 0.7s;
                transition: max-height 0.7s;
            }

            #content.open {
                max-height: 1000px;

                /*Set Transitions up*/
                -webkit-transition: max-height 0.7s;
                -moz-transition: max-height 0.7s;
                transition: max-height 0.7s;
            }

            #show-more {
                background: #1594e5;
                color: #fff;
                font-family: #fff;
                display: block;
                width: 140px;
                font-size: 20px;
                text-transform: uppercase;
                padding: 10px;
                text-align: center;
                margin: 20px auto;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div id="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula arcu non justo feugiat, at volutpat arcu rhoncus.</p>
            <p>Phasellus eget est eu odio varius hendrerit id vel justo. Sed id nisi et odio lacinia feugiat. Fusce at diam eget justo aliquam fermentum.</p>
            <p>Proin eget justo a nulla vestibulum fringilla. Duis vehicula leo a libero facilisis fringilla. In hac habitasse platea dictumst.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula arcu non justo feugiat, at volutpat arcu rhoncus.</p>
            <p>Phasellus eget est eu odio varius hendrerit id vel justo. Sed id nisi et odio lacinia feugiat. Fusce at diam eget justo aliquam fermentum.</p>
            <p>Proin eget justo a nulla vestibulum fringilla. Duis vehicula leo a libero facilisis fringilla. In hac habitasse platea dictumst.</p>
        </div>
        <a id="show-more">Show More</a>

        <script src = "test.js"></script>
    </body>
    </html>

---
<br>



### Simple HTML Form

#### Code

    <!DOCTYPE html>
    <html>
    <head>
        <title>Simple Form Example</title>
    </head>
    <body>
        <form id = "my-form" name = "myForm" action="#">
            <label for="name">Name:</label>
            <input type="text" name="name"><br/>

            <label>Hobbies:</label><br/>
            <input type="checkbox" name="biking" value="biking">Biking<br/>
            <input type="checkbox" name="diving" value="diving">Diving<br/>
            <input type="checkbox" name="sking" value="sking">Sking<br/>

            <label for="colour">Fav Colour:</label>
            <select name="colour">
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </select>

            <input type="submit" name="submit" value="Submit">
        </form>

        <script src="test.js"></script>
    </body>
    </html>

---
<br>



### Using Another File for Script

#### Code

##### index.html

    <!DOCTYPE html>

    <html lang="en">
        
        <head>
            <meta charset="utf-g" />
            <title> Hello, World! </title>
        </head>
        
        <body>

            <h1>JS for biginners</h1>
            
            <div id="content">
                <p>blah blah blah</p>
            </div>

            <script src="test.js"> </script>

        </body>

    </html>

##### test.js

    alert("Hello, World!");

---
<br>



### Logging to Console

#### Explanation

- `document.write(myVar2)` or `document.write("AB"+0+7)`
(Writes on Document/Page)

- `console.log(myVar2)`
AB (Writes to console)

---
<br>



### Variables

#### Code

    var myVar;
    undefined

    myVar = 10;
    10


    var myVar2;
    undefined

    myVar2 = "DK";
    'DK'


    var myVar3 = 10.5;
    undefined

    myVar3
    10.5
    

    myVar2 = "AB";
    'AB'

    myVar2
    'AB'


    myVar = "DK";
    'DK'

    myVar
    'DK'

#### Explanation

- No req for specifying data types

- Has dynamic types as it can change

---
<br>



### Operators

#### Code

    myVar = 10;
    10
    myVar+10;
    20
    myVar=myVar-5;
    5
    myVar=myVar*5;
    25
    myVar=myVar/25;
    1
    myVar%1
    0

    5+'hello'
    '5hello'
    "hello" + " DK"
    'hello DK'

    myVar+=9
    10

    ++myVar
    11

#### Explanation

- Most common operators:
  - `=`
  - `+`
  - `-`
  - `*`
  - `/`
  - `%`

<br>

- `+` can concatenate stings as well as numbers with other strings

- Short-hand method `operator=`

---
<br>



### Comparision Operators

#### Code

    var myVar = 5;
    undefined
    myVar<5
    false
    myVar>5
    false
    myVar<=5
    true
    myVar>=5
    true
    myVar==5
    true
    myVar!=5
    false


    myVar="5"
    '5'
    myVar==5
    true
    myVar===5
    false
    myVar!=5
    false
    myVar!==5
    true
    
#### Explanation

- `===` is used to check value and type of variable

---
<br>



### Logical Operators

#### Code

##### index.html

    <!DOCTYPE html>

    <html>  
        <body>
            <script src="test.js"> </script>

        </body>
    </html>

##### test.js

    var myAge = 21;

    if (myAge >=18 && myAge <= 30){
        document.write("You can come, you cool dude");
    }
    else{
        document.write("You aint comming!");
    }

#### Explanation

- There are 3 logical operators:
  - AND `&&`
  - OR `||`
  - NOT `!`

---
<br>



### Booleans

#### Code

    var iLikeMeat = true
    undefined
    iLikeMeat
    true

    7>10
    false
    7==7
    true

    Boolean(7<13)
    true

    Boolean(0)
    false

    Boolean("Dk")
    true
    Boolean("")
    false

#### Explanation

- `0` and `-0` are only false numbers

- Empty string returns false

---
<br>



### IF Else Statements

#### Code

##### test.js

    var youLikeMeat = true;
    var myNum = 10;
    var yourNum = 10;
    if (myNum>yourNum){
        document.write("myNum is Greater then yourNum");
    }
    else if(myNum<yourNum){
        document.write("myNum is Less then yourNum");
    }
    else{
        document.write("myNum is equal to yourNum");
    }

---
<br>



### Loops

#### While Loop Code

##### test.js
    
    var myAge = 21;
    while (myAge<25){
        document.write("Your age is less then 21");
        document.write("<br>");
        myAge++;
    }
    document.write("Your are now 25");

#### For Loop Code

##### test.js

    for (i=1; i<=5; i++){
    console.log(i);
    }
    console.log("All links looped");

#### Practical Example for Loop Code

##### index.html
    <!DOCTYPE html>

    <html>  
        <body>
            <a href="Images/image-1.png">Link 1</a>
            <a href="Images/image-2.1.png">Link 2</a>
            <a href="Images/image-3.1.png">Link 3</a>
            <a href="Images/image-4.png">Link 4</a>
            <a href="Images/image-2.2.png">Link 5</a>
            <a href="Images/image-3.2.png">Link 6</a>
            <script src="test.js"> </script>
        </body>
    </html>

##### test.js

    var links = document.getElementsByTagName("a");

    for(i=0; i<links.length; i++){
    links[i].className = "Link-" + i;
    }

---
<br>



### Break & Continue

#### Code

##### test.js
    for (i=1; i<=10; i++){
        if(i===2 || i===4){
            continue;
        }
    if(i===6){
        break;
    }
    console.log(i);
    }
    console.log("Broken out of the loop");

#### Explanation

- `break` breaks you out of the loop completely

- `continue` just skips the specified iteration

---
<br>



### Functions

#### Code

##### test.js
    function getAvg (a,b) {
        var avg = (a+b)/2;
        console.log(avg);
        return avg;
    }
    var result = getAvg(7,12);
    document.write("Result is " + result);

---
<br>

 

### Variable Scope

#### Code

##### test.js
    function getAvg (a,b) {
        var avg = (a+b)/2; //Local Var
        console.log(avg);
        return avg;
    }
    var result = getAvg(7,12); //Global Var
    document.write("Result is " + result);

#### Explanation

- Global: Can be used anywhere in the code

- Local: Can be used only in the specific block code

---
<br>



### Numbers

#### Code

##### test.js
    var a = 5;
    var b = 5;
    console.log(a+b);
##### Output: 
- 7

<br>

    var a = "5";
    var b = 5;
    console.log(a+b);
    console.log(typeof(a+b));

##### Output:
- 55
- string

<br>

    //Math Objects
    console.log(Math.round(7.5));
    console.log(Math.floor(7.5));
    console.log(Math.ceil(7.5));
    console.log(Math.max(7,5,9,6,4));
    console.log(Math.min(7,5,9,6,4));
    console.log(Math.PI);

##### Output:
- 8
- 7
- 8
- 9
- 4
- 3.141592653589793

<br>

#### Explanation

- Black color represents Strings

- Blue color represents Numbers

---
<br>



### NaN

#### Code

##### test.js
    var a = "5";
    var b = 5;
    console.log(a*b);

##### Output:
- 25

<br>

    var a = 5;
    var b = "apples";
    console.log(a*b);

##### Output:
- NaN

<br>

    var a = "apples";
    var b = 5;

    if(isNaN(a)){
        console.log("That ain't a no");
    }
    else{
        console.log(a*b + " is a no");
    }

##### Output:
- That ain't a no

<br>

    var a = "apples";
    var b = 5;

    if(isNaN(a)){
        console.log("That ain't a no");
    }
    else{
        console.log(a*b + " is a no");
    }

##### Output:
- 25 is a no

---
<br>



### Strings

#### Code

##### test.js

    var str1 = "I am x 'function-1' string";
    console.log(str1);
    var str2 = 'I am "function-2" string';
    console.log(str2);
    var str3 = "I\'m 'function-3' string";
    console.log(str3);
    
    //Properties of Strings
    console.log(str1.length);

    //Functions of String
    console.log(str1.toUpperCase(str1));
    console.log(str1.indexOf("string"));

    if(str1.indexOf("x") === -1){
        console.log("The letter 'x' is not in the string");
    }
    else{
        console.log("The letter 'x' starts at position " + str1.indexOf("x"));
    }

##### Output:
- I am x 'function-1' string
- I am "function-2" string
- I'm 'function-3' string
<br><br>
- 26
<br><br>
- I AM X 'FUNCTION-1' STRING
- 20
<br><br>
- The letter 'x' starts at position 5

<br>

    //Comparing Strings
    var str4 = "abc";
    var str5 = "ABC";
    console.log(str4===str5);
    console.log(str4.toLowerCase===str5.toLowerCase);

    console.log(str4<str5);
    console.log(str4>str5);

    var str6 = "abc";
    var str7 = "bcd";
    console.log(str6<str7);
    console.log(str6>str7);

##### Output:
- false
- true
<br><br>
- false
- true
<br><br>
- true
- false

#### Explanation

- Lower case letters are greater in JS

- Upper case letters are smaller in JS


---
<br>



### Slice an Split Methods of Strings

#### Code
   
    //Slice
    var str1 = "hello, world"
    undefined
    str1
    'hello, world'

    var str2 = str1.slice(0,5)
    undefined
    str2
    'hello'

    var str3 = str.slice(7)
    undefined
    str3
    'world'
    
<br>

    //Split
    var tags = "meat, beef, chicken";
    undefined
    tags
    'meat, beef, chicken'
    var tagsArray = tags.split(",");
    undefined
    tagsArray
    (3) ['meat', ' beef', ' chicken']

---
<br>



### Arrays 

#### Code

    //Declaring and initializing arrays

    //Way_1

    var myArray_1 = [];
    undefined

    myArray_1[0] = 0;
    0

    myArray_1[1]= "zero";
    'zero'

    myArray_1[2]= false;
    false

    myArray_1
    (3) [0, 'zero', false]    

    console.log(myArray_1);
    (3) [0, 'zero', false]

    myArray_1[2]=true;
    true

    myArray_1
    (3) [0, 'zero', true]


    //Way_2
    
    var myArray_2 = [1, "one", true];
    undefined

    myArray_2
    (3) [1, 'one', true]


    //Way_3
    
    var myArray_3 = new Array(5);


    //Mthods that we use in Arrays
    
    myArray_2.length
    3

    myArray_2.sort();
    (3) [1, 'one', true]

    myArray_2.reverse();
    (3) [true, 'one', 1]

#### Explanation

- JS is `0` based language so array starts with `0` 

- Can store different datatypes in an array

- Array can be updated

- Using 3rd method we can specify no of slots of the array

---
<br>



### Creating Objects

#### Code

    //Way-1

    var myString_1 = new String();
    undefined

    myString_1 = "hello";
    'hello'

    myString_1.length;
    5

    myString_1.toUpperCase();
    'HELLO'


    //Way-2 (Short)

    var myString_2 = "hi there";
    undefined

    myString_2.length;
    8

##### test.js

    Creating a new Object
    //Way-1

    var myCar_1 = new Object();
    myCar_1.maxSpeed=180;
    myCar_1.driver="AB";

    console.log(myCar_1.maxSpeed);
    console.log(myCar_1.driver);

    myCar_1.drive = function(){console.log("Now Driving");};
    myCar_1.drive();


    //Way-2 (Short)

    var myCar_2 = {
        maxSpeed: 200,
        driver: "DK",
        drive: function(speed, time) {
            console.log(speed*time);
        }
    };

    console.log(myCar_2.maxSpeed);
    console.log(myCar_2.driver);
    myCar_2.drive(180, 3);

##### Output:

- 180
- AB
- Now Driving
<br><br>
- 200
- DK
- 540

---
<br>



### `this` Keyword 

#### Code

##### test.js

    var myCar_1 = {
        maxSpeed: 200,
        driver: "DK",
        drive: function(speed, time) {
            console.log(speed*time);
        },
        test: function(){
            console.log(myCar_1);
        },
        logDriver: function(){
            console.log("Driver Name: " + this.driver);
        }
    };

    var myCar_2 = {
        maxSpeed: 200,
        driver: "AB",
        drive: function(speed, time) {
            console.log(speed*time);
        },
        test: function(){
            console.log(this);
        }
    };

    console.log(myCar_1.maxSpeed);
    console.log(myCar_1.driver);
    myCar_1.drive(180, 3);
    myCar_1.test();
    myCar_2.test();
    myCar_1.logDriver();
  
#### Explanation

- Keyword `this` refers to the object in which it is used

- Can also use the name of the object instead of `this` keyword but you would have to change name at every different object

- Good for creating constructor functions

---
<br>



### Constructor Functions

#### Code

##### test.js

    var Car = function(maxSpeed, driver){
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.drive = function(speed, time) {
            console.log(speed*time);
        };
        this.logDriver = function(){
            console.log("Driver Name: " + this.driver);
        };
    }

    var myCar_1 = new Car (200, "DK-1");
    var myCar_2 = new Car (190, "DK-2");
    var myCar_3 = new Car (180, "DK-3");
    var myCar_4 = new Car (170, "DK-4");

    console.log(myCar_1.maxSpeed);
    myCar_1.drive(200, 5);
    myCar_1.logDriver();

    console.log(myCar_2.maxSpeed);
    myCar_2.drive(190, 5);
    myCar_2.logDriver();

    console.log(myCar_3.maxSpeed);
    myCar_3.drive(180, 5);
    myCar_3.logDriver();

    console.log(myCar_4.maxSpeed);
    myCar_4.drive(170, 5);
    myCar_4.logDriver();

##### Output:

- 200
- 1000
- Driver Name: DK-1
<br><br>
- 190
- 950
- Driver Name: DK-2
<br><br>
- 180
- 900
- Driver Name: DK-3
<br><br>
- 170
- 850
- Driver Name: DK-4
  
#### Explanation

- Constructor name starts with Capital letter generally

---
<br>



### Date Object

#### Code

##### test.js

    var myDate = new Date();
    var myPastDate = new Date(2022, 7, 21, 10, 30, 15);
    var myFutureDate = new Date(2026, 1, 21, 20, 40, 30);
    console.log(myDate);
    console.log(myPastDate);
    console.log(myFutureDate);


    var birthday_1 = new Date(2002, 1, 13, 11, 15, 25);
    var birthday_2 = new Date(2002, 1, 13, 11, 15, 25);

    //Methods

    //gets the month of the date (0-11)
    console.log(birthday_1.getMonth());

    //gets the full year (YYYY)
    console.log(birthday_1.getFullYear());

    //gets the date of the month (1-31)
    console.log(birthday_1.getDate());

    //gets the day of the week (0-6)
    console.log(birthday_1.getDay());

    //gets the hour of the date (0-23)
    console.log(birthday_1.getHours());

    //gets the milliseconds since 13th of Feb (the most used)
    console.log(birthday_1.getTime());

    //Comparing Birthday Objects
    if (birthday_1===birthday_2){
        console.log("You were born at the same time")
    }
    else{
        console.log("You weren't born at the same time")
    }

    //Comparing Birthday Time
    if (birthday_1.getTime()===birthday_2.getTime()){
        console.log("You were born at the same time")
    }
    else{
        console.log("You weren't born at the same time")
    }

##### Output:

- Thu Aug 17 2023 14:41:40 GMT+0500 (Pakistan Standard Time)
- Sun Aug 21 2022 10:30:15 GMT+0500 (Pakistan Standard Time)
- Sat Feb 21 2026 20:40:30 GMT+0500 (Pakistan Standard Time)
<br><br>
- 1
- 2002
- 13
- 3
- 11
- 1013580925000
- You weren't born at the same time
- You were born at the same time

#### Explanation

- `Date` is an in built object of JS

---
<br>



### DOM

#### Explanation

- DOM: Document Object Model

- Application programing interface

- We use DOM when we interact wit web pages

- Adds content to HTML document

- Deletes content from HTML document

- Changes content in HTML document

- Components:

    - Document: Doc is just the web page and generally is an HTML doc
    
    - eg:
    ![Alt text](Images/image-2.1.png)

    - Object: Every Element in HTML is pretty much an object to DOM

    - eg:
    ![Alt text](Images/image-2.2.png)

    - Model: Describes how these objects are lay down in a tree fashion
    
    - eg:
    ![Alt text](Images/image-2.3.png)

- Everything that can be changed is a node. eg: elements, text within elements, HTML attributes

- Things we do with DOM:
![Alt text](Images/image-2.4.png)
---
<br>



### Traversing DOM

#### Explanation

- Methods: There are 3 methods by which we can grab nodes or contents and store them in Variables

    - Class Method:
        - `document.getElementByClassName("ClassName");` returns an array of `classNames`

        - `var myClassNameDivs = document.getElementByClassName("className");` stores in variable `classNameDivs`

        - now we can call methods and properties on this variable `classNameDivs`

    - Tag Method:

        - `var myHeadingNAme = classNameDivs[index].getElementsByTagName("headingName");` grabs `headingName` and stores it in `myHeadingNAme`

        - `myHeadingNAme[index].innerHTML = "What Ever You want to write";` Chenges the specified content

    - Id Method:
        - `document.getElementById("Id");` returns element of the id `Id`

        - Ids are unique so it returns only one element



---
<br>



### Changing Page Content

#### Code

    var myBody = document.getElementsByTagName("body");
    undefined

    myBody
    HTMLCollection [body]0: bodylength: 1[[Prototype]]: HTMLCollection

    myBody[0].innerHTML = "<p>I am a paragraph</p>"; 
    '<p>I am a paragraph</p>'


    var myTitle = document.getElementById("page-title");
    undefined

    myTitle
    <h2 id=​"page-title">​ Welcome to Our Website​</h2>
    ​
    myTitle.textContent
    ' Welcome to Our Website'

    myTitle.textContent = "BYE";
    'BYE'


#### Explanation

- Two properties are used to change content of your webpage:

    - `innerHTML` property is used to change HTML of tag in the page

    - `textContent` property is used to change only text of desired tag in the page

---
<br>



### Changing Element Attributes

#### Code

    //Methods

    var link = document.getElementById("test");
    undefined

    //get attributes/methods

    link
    <a href=​"#" id=​"test" class=​"ninja">​Home​</a>​

    link.getAttribute("href");
    '#'

    link.getAttribute("class");
    'ninja'


    //set attributes/methods

    link.setAttribute("class", "pie");
    undefined

    link.setAttribute("alt", "hello");
    undefined

    link
    <a href=​"#" id=​"test" class=​"pie" alt=​"hello">​Home​</a>​


    //Properties

    link.className;
    'pie'

    ink.className = "Ninja";
    'Ninja'


#### Explanation

- Properties and Methods behaves differently

- eg: 

    - Method: 

            link.getAttribute("href");
            '#'

    - Property: 

            link.href;
            'file:///E:/Programing/JavaScript/index.html#'

---
<br>



### Changing CSS Styles

#### Code

    //Methods

    var title = document.getElementById("page-title");
    undefined

    title.setAttribute("style", "position: relative;");
    undefined

    title.setAttribute("style", "left: 10px;");
    undefined

    title.setAttribute("style", "position: relative; left: 10px;");
    undefined


    //Properties

    title.style.left = "20px";
    '20px'

    itle.style.top = "10px";
    '10px'

    title.style.color = "red";
    'red'

    title.style.backgroundColor = "Black";
    'Black'


#### Explanation

- If we add styles through methods seperately it would override the older one

- In order to add multiple styles we have to add them in a single value parameter

- If we add styles through properties seperately it would keep adding the new ones along with the older ones

---
<br>



### Adding Elements to the DOM

#### Code

    var newA = document.createElement("a");
    undefined

    newA
    <a>​</a>

    var links = document.getElementById("links-nav");
    undefined

    links
    <nav id=​"links-nav">​…​</nav>​<a href=​"#" id=​"test" class=​"ninja">​Home​</a>​<a href=​"#">​About​</a>​<a href=​"#">​Services​</a>​<a href=​"#">​Contact​</a>​</nav>
    ​
    links.appendChild(newA);
    <a>​</a>​

    newA.innerHTML = "Blog";
    'Blog'


    //For inserting at desired position

    links.insertBefore(newA, links.getElementsByTagName("a")[0]);
    <a>​Blog​</a>​

---
<br>



### Removing Elements from the DOM

#### Code

    var parent = document.getElementById("links-nav");
    undefined

    parent
    <nav id=​"links-nav">​…​</nav>​<a>​Blog​</a>​<a href=​"#" id=​"test" class=​"ninja">​Home​</a>​<a href=​"#">​About​</a>​<a href=​"#">​Services​</a>​<a href=​"#">​Contact​</a>​</nav>

    var child = parent.getElementsByTagName("a")[0];
    undefined

    child
    <a>​Blog​</a>

    var removed = parent.removeChild(child);​​undefined

#### Explanation

- We save the removed item in a variable so if needed we can add it again 

---
<br>



### Intro to JavaScript Events

#### Code

    var title = document.getElementById("page-title");
    undefined

    title.onclick = function(){
        alert("You Clicked Me");
    };
    ƒ (){
        alert("You Clicked Me");
    }

    title.onmouseover = function (){
        alert("You hovered your mouse over me");
    };
    ƒ (){
        alert("You hovered your mouse over me");
    }

#### Explanation

- Sometimes we need to execute a certain code when a certain thing has happened or some condition is met

- These are called events

- Anonymous function has no name

---
<br>



### The onClick Event

#### Code

##### test.js
   
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function(){
        if(content.className == "open"){
            //shrink the box
            content.className = "";
            button.innerHTML = "Show More";
        }
        else{
            //expand the box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    }

---
<br>



### Window onLoad Event

#### Code

##### test.js
   
    function setUpEvents(){
        var content = document.getElementById("content");
        var button = document.getElementById("show-more");
        
        button.onclick = function(){
            if(content.className == "open"){
                //shrink the box
                content.className = "";
                button.innerHTML = "Show More";
            }
            else{
                //expand the box
                content.className = "open";
                button.innerHTML = "Show Less";
            }
        }
    }

    window.onload = function(){
        setUpEvents();
    }

#### Explanation

- When the window is fully loaded then execute this function

---
<br>



### JavaScript Timers

#### Code

##### index.html
   
    //Changes Made
    #content {
            width: 400px;
            background: #ddaaaa;
            padding: 20px;
            padding: 20px;
            font-family: calibar;
            font-size: 18px;
            color: #444;
            margin: 0 auto;
            text-align: center;
            border: 1px solid #ff7777;
            font-weight: bold;
            opacity: 0;

            /*Set Transitions up*/
            -webkit-transition: opacity 0.7s;
            -moz-transition: opacity 0.7s;
            transition: opacity 0.7s;
        }

        #content.show {
            opacity: 1;

            /*Set Transitions up*/
            -webkit-transition: opacity 0.7s;
            -moz-transition: opacity 0.7s;
            transition: opacity 0.7s;
        }

        #color-changer{
            width: 200px;
            height: 100px;
            margin: 30px auto;
            border: 1px solid #000;
            background: #fff;

            -webkit-transition: background 0.7s;
            -moz-transition: background 0.7s;
            transition: background 0.7s;
        }

##### test.js

    var content = document.getElementById("content");

    function showContent(){
        content.className = "show";
    }
    //Timer
    setTimeout(showContent, 3000);


    var colorChanger = document.getElementById("color-changer");
    var colours = ["pink", "red", "blue", 'green'];
    var counter = 0;

    function changeColor(){
        if(counter >= colours.length){
            counter = 0;
        }
        colorChanger.style.background = colours[counter];
        counter++;
    }
    //Timer
    var myTimer = setInterval(changeColor, 3000);

    //Stoping Timer
    colorChanger.onclick = function(){
        clearInterval(myTimer);
        colorChanger.innerHTML = "Timer Stopped";
    }

#### Explanation

- `setTimer` has two parameters:

    - First one is function

    - Second one is time in miliseconds

---
<br>



### Accessing from Elements

#### Code

    var myForm = document.forms.myForm;
    undefined

    myForm
    <form id=​"my-form" name=​"myForm" action=​"#">​…​</form>​

    myForm.name
    <input type=​"text" name=​"name">​

    myForm.name.value;
    ''

    myForm.name.value;
    'DK'

    myForm.colour.value;
    'Red'

    myForm.name.onfocus = function() {
    myForm.name.style.border = "4px solid pink";
    }
    ƒ () {
        myForm.name.style.border = "4px solid pink";
    };

    myForm.name.onblur = function() {
        myForm.name.style.border = "none";
    }
    ƒ () {
        myForm.name.style.border = "none";
    };

#### Explanation

- We can use `onfocus` to do things when a certain field is focused

---
<br>



### Simple Form Validation

#### Code

##### index.html

    //Changes made: Added before script tag
    <div id="message" style="color: red;"></div>

##### test.js

    var myForm = document.forms.myForm;
    var message = document.getElementById("message");

    myForm.onsubmit = function(){
        if(myForm.name.value == ""){
            message.innerHTML = "Please Enter a Name";
            return false;
        }
        else{
            message.innerHTML = "";
            return true;
        }
    }

#### Explanation

- When we click 'submit' button it would communicate with the server and does some server side validation and return back a result

- We can interrupt this process using the `onsubmit` event do some client side validation so if it is what we require then we do not need it to the server

- `return false;` prevents form from being submitted

---
<br>



### JaveScript Libraries

#### Code

    var myPara2 = $("#content p:last-child");
    undefined

    myPara2.addClass("test");
    n.fn.init [p.test, prevObject: n.fn.init(1), context: document, selector: '#content p:last-child']

    myPara2.removeClass("test");
    n.fn.init [p, prevObject: n.fn.init(1), context: document, selector: '#content p:last-child']

    myPara2.fadeOut();
    n.fn.init [p, prevObject: n.fn.init(1), context: document, selector: '#content p:last-child']

    myPara2.fadeIn();
    n.fn.init [p, prevObject: n.fn.init(1), context: document, selector: '#content p:last-child']

    myPara2.css({position: "relative", color: "red"});
    n.fn.init [p, prevObject: n.fn.init(1), context: document, selector: '#content p:last-child']

    myPara2.animate({left: "50px"});
    n.fn.init [p, prevObject: n.fn.init(1), context: document, selector: '#content p:last-child']



##### index.html
    <!DOCTYPE html>
    <html>
    <head>
        <title>JavaScript Libraries</title>
    </head>
    <body>

        <div id = "content">
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>blah blah blah</p>
        <p>Grab Me</p>
        </div>

        <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
        <script src="test.js"></script>
    </body>
    </html>

##### test.js
    //Normal way
    var myPara1 = document.getElementById("content").getElementsByTagName("p")[5];

    //Using jQuery
    var myPara2 = $("#content p:last-child");

#### Explanation

- JS libraries:
![Alt text](Images/image-3.1.png)
![Alt text](Images/image-3.2.png)
![Alt text](Images/image-3.3.png)

- If we want to add a feature to our web we do not need to code it by ourself
we can use a library for it

- Most popular: jQuery

- We can use it by linking to a CDN version of the file

- Go to 'jQuery' web page, then go to 'Using jQuery with a CDN' section, then click on 'https://releases.jquery.com' or 'sourcemap files', then in in the 'jQuery 1.x' section click on the 'minified' link, then copy the url

- Paste the link in 'html' file above js file

![Alt text](Images/image-4.png)

---
<br>
