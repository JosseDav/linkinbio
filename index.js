function function1() {
    alert('something else');
    var ul = document.getElementById("list");
    for(let i = 0; i < 5; i++){
        var li = document.createElement("li");
        li.innerHTML = '<img src="./images/pokeball.svg" width="20"./>'
            + '<img src="./images/insta.svg" width="20"./>'
            + '<a href  = "https://google.com"> ' + i + '</a>';
        li.setAttribute("id", "element4"); 
        ul.appendChild(li);
    }
}
