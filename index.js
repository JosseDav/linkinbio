// links variable for all the links I want to add, will be removed once I figure out why I haven't been able to use the .json file for this
links = {"insta":["https://www.instagram.com/josse_and_the_larvitars/?hl=en", "./images/insta.svg", "Instagram"],
    "linkedin": ["https://www.linkedin.com/in/josse-davila/", "./images/linkedin.png", "LinkedIn"], 
    "twitter": ["https://twitter.com/Reversenameman", "./images/Twitter-logo.svg", "Twitter"],
    "github": ["https://github.com/JosseDav", "./images/github.svg", "Git Hub"]
}
keys = Object.keys(links);
function populateUL() {
    var ul = document.getElementById("list")
    for(let i = 0; i < keys.length; i++){
        var li = document.createElement("li")
        li.innerHTML = '<img src="./images/pokeball.svg" width="20"/>'
            + '<img src="' + links[keys[i]][1] + '"width="20"/>'
            + '<a href  = "' +links[keys[i]][0] + '"> ' 
            + links[keys[i]][2] + '</a>'
        li.setAttribute("id", "element4") 
        ul.appendChild(li)
    }
    console.log('done')
}

