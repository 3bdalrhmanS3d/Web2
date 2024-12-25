let currentIndex = 0;
let personsData = [];

fetchXML();
function fetchXML()
{
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "data.xml" , true);
    xhr.onreadystatechange = function() 
    {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const xmldoc = xhr.responseXML;
            const persons = xmldoc.getElementsByTagName("person");

            personsData = [];
            for (let i = 0; i < persons.length; i++) {
                personsData.push({
                    name: persons[i].getElementsByTagName("name")[0].textContent.trim(),
                    age: persons[i].getElementsByTagName("age")[0].textContent.trim(),
                    city: persons[i].getElementsByTagName("city")[0].textContent.trim()
                });
                           
            }
            currentIndex = 0;
            displayData(currentIndex);
        }
    }
    xhr.send(null);
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

// Fetch XML when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchXML();
});