# JavaScript
<br>
<br>
<br>

## Theory
<br>

### Html
    Controls structure of your web page.

### CSS
    Controls presentation /design

### JS
    Adds behaviour and interactivity

---
---

<br>
<br>

## Codes
<br>

### Hello World

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

<br>

### Using another file for script

#### index.html

    <!DOCTYPE html>

    <html lang="en">
        
        <head>
            <meta charset="utf-g" />
            <title> Hello, World! </title>
        </head>
        
        <body>

            <h1>JS for biginners</h1>
            
            <div id="contet">
                <p>blah blah blah</p>
            </div>

            <script src="test.js"> </script>

        </body>

    </html>

#### test.js
    alert("Hello, World!");