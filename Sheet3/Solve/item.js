var xhr = new xhrHttpRequest();
/*  
    Creates a new XMLHttpRequest object (xhr).
    This object is used to make asynchronous requests to the server to fetch the XML file (item.xml).
*/

function loadxhr()
{
    xhr.open("GET", "item.xhr", true);
    xhr.onreadystatechange = processxhr ;
    xhr.send(null);
}

    // This function is triggered when the button in item.html is clicked.
    // Steps in the function:
    // xhr.open("GET", "item.xml", true):
    // Prepares an HTTP GET request to fetch the item.xml file.
    // true indicates the request is asynchronous.
    // xhr.onreadystatechange = processXML;:
    // Assigns the function processXML to handle changes in the xhr object's state.
    // xhr.send(null);:
    // Sends the request to the server to fetch the XML file.

function processxhr()
{
    if(xhr.status === 200 && xhr.readyState === 4) // Check if Request Succeeded: status = 200, readyState = 4
    {

        var xhrdoc = xhr.responsexhr;
        var items = xhrdoc.getElementsByTagName("item");
        var table = document.getElementById("item");

        var html = "<tr><th>Name</th><th>Price</th><th>Description</th></tr>";
        for(var i = 0; i < items.length; i++)
        {
            var name = items[i].getElementsByTagName("name")[0].textContent;
            var price = items[i].getElementsByTagName("price")[0].textContent;
            var description = items[i].getElementsByTagName("description")[0].textContent;

            html += "<tr><td>" + name + "</td><td>" + price + "</td><td>" + description + "</td></tr>";
        }

        table.innerHTML = html;
    }
}