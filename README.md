# JavaScript
---
<br><br><br>

## Theory
<br>

### Html
    Controls structure of your web page.

### CSS
    Controls presentation /design

### JS
    Adds behaviour and interactivity

### Key Points

#### Variables

<br><br>



### USing Chrome Developer Tools
    To Open: F12

![Alt text](image-1.png)

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

- No req for specifying dataTypes
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



### Logging to Console

#### Explanation

- `document.write(myVar2)` or `document.write("AB"+0+7)`
(Writes on Document/Page)

- `console.log(myVar2)`
AB (Writes to console)

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

##### index.html

    <!DOCTYPE html>

    <html>  
        <body>
            <script src="test.js"> </script>

        </body>
    </html>

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



### 

#### Code

##### index.html


##### test.js
    

---
<br>



### 

#### Code

##### index.html


##### test.js
    

---
<br>



### 

#### Code

##### index.html


##### test.js
    

---
<br>