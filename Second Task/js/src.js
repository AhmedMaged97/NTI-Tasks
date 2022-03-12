const display = document.querySelector("#show")
function read(link, callBack) {
    fetch(link)
    .then((data) => {
        data.json()
        .then((x) => {
            callBack(x, false)
        })
        .catch ((err)=> {
            callBack(false, err.message)
        })
    })
    .catch((e) => callBack(false, e.message))
}

const creatElement = (parent, HtmlElement, text, attribute)=>{
    const el = document.createElement(HtmlElement)
    parent.appendChild(el)
    if(text) el.textcContent = text
    if(classs) el.className = classs
    if (attribute) el.setAttribute(attribute.key, attribute.val)
    return el
}
read("https://newsapi.org/v2/top-headlines?country=eg&apiKey=b71c82bfe81c4d57a4f14cfad171f03e", (information)=>{
    information.forEach(info => {
        const div = creatElement (display, "div", null,{key: "style", val: "width:25%"})
        creatElement(div , "h3", info.title, null)
        creatElement(div , "img", null, {key:"src", val:"info.urlToImage"})
        creatElement(div , "p", info.description, null)
        creatElement(div , "h5", info.source, null)
    });
})