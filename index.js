function populateUL() {
    var ul = document.getElementById("list")
    fetch('http://127.0.0.1:8080/links.json')
    .then((response) => response.json())
    .then(
        (json) => {
            Object.keys(json).forEach(keys => {
                var li = document.createElement("li")
                li.innerHTML = '<img src="./images/pokeball.svg" width="20"/>'
                + '<img src="' + json[keys].image  + '"width="20"/>'
                + '<a href  = "' + json[keys].link + '"> '
                + json[keys].title + '</a>'
                li.setAttribute("id", "element4")
                ul.appendChild(li)
            })
        }
    );
}

