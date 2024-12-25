let currentIndex = 0;
let personsData = [];

fetchXML();
let xhr = new XMLHttpRequest();
function fetchXML()
{
    xhr.open("GET" , "data.xml" , true);
    xhr.onreadystatechange = read ;
    xhr.send(null);
}

function read() {
    if (xhr.status === 200 && xhr.readyState === 4) {
        let xmldoc = xhr.responseXML;
        let persons = xmldoc.getElementsByTagName("person");

        for (let i = 0; i < persons.length; i++) {
            const person = {
                name: persons[i].getElementsByTagName("name")[0].textContent.trim(),
                age: persons[i].getElementsByTagName("age")[0].textContent.trim(),
                city: persons[i].getElementsByTagName("city")[0].textContent.trim()
            }

            personsData.push(person);
        }
    }
}

function displayData(index)
{
    if(index>=0 && index < personsData.length)
    {
        document.getElementById("name").textContent = personsData[index].name;
        document.getElementById("age").textContent = personsData[index].age;
        document.getElementById("city").textContent = personsData[index].city;
    }
}

function previousPerson()
{
    if(currentIndex > 0 )
    {
        currentIndex-- ;
        displayData(currentIndex);
    }
}

function nextPerson()
{
    if(currentIndex < personsData.length - 1)
    {
        currentIndex++;
        displayData(currentIndex);
    }
}

///////////
let data = [];

// Load JSON data from the server
function loadJson() {
  try {
    xhr.open('GET', 'data.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Parse JSON data
          data = JSON.parse(xhr.responseText).persons;
          displayData();
        } else {
          console.error(`Error loading data: ${xhr.statusText}`);
        }
      }
    };
    xhr.send(null);
  } catch (error) {
    console.error(`Error loading data: ${error.message}`);
  }
}