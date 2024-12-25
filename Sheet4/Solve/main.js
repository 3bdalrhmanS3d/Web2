let currentIndex = 0;
let personsData = [];

// Fetch XML Data
function fetchXML() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
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

            currentIndex = 0; // Reset index
            displayXMLData(currentIndex);
        } else if (xhr.readyState === 4) {
            console.error(`Failed to load XML: ${xhr.status}`);
        }
    };
    xhr.send(null);
}

// Display XML Data
function displayXMLData(index) {
    if (index >= 0 && index < personsData.length) {
        document.getElementById("name").textContent = personsData[index].name;
        document.getElementById("age").textContent = personsData[index].age;
        document.getElementById("city").textContent = personsData[index].city;
    }
}

// Navigation Buttons
function previousPerson() {
    if (currentIndex > 0) {
        currentIndex--;
        displayXMLData(currentIndex);
    } else {
        console.warn("You are already at the first person.");
    }
}

function nextPerson() {
    if (currentIndex < personsData.length - 1) {
        currentIndex++;
        displayXMLData(currentIndex);
    } else {
        console.warn("You are already at the last person.");
    }
}

// Fetch XML when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchXML();
});
