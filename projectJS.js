let form = document.getElementById('myForm');
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Check if the input value matches the pattern
      document.getElementById("myButton").addEventListener('click', function(event) {
        if (!regex.test(email.value)) {
          alert('Invalid email! Email is required, and must be alphanumeric input.');
          event.preventDefault();
          return;
        }
    }); 

document.getElementById("myButton").addEventListener('click',myWindow)
function myWindow()
{
    visitorName = document.getElementById("name").value;
    breakfast = document.getElementById("breakfast").value;
    let snack = document.getElementById("snack").value;
    let lunch = document.getElementById("lunch").value;
    let snack2 = document.getElementById("snack2").value;
    let dinner = document.getElementById("dinner").value;
    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + visitorName + ", here is your meal plan for the week!");
    myText += ('<h1>Meal Plan</h1>');
    myText += ('</body></html>');
    myText += ('<p>Monday:</p>'+ breakfast);
    myText += ('<p>Tuesday:</p>'+ snack);
    myText += ('<p>Wednesday:</p>'+ lunch);
    myText += ('<p>Thursday:</p>'+ snack2);
    myText += ('<p>Friday:</p>'+ dinner);  
    myText += ('<p>Saturday:</p>'+ breakfast);
    myText += ('<p>Sunday:</p>'+ breakfast);
    myText += ('</body></html>');

    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);

      // Close the document to finalize changes
      flyWindow.document.close();
}



