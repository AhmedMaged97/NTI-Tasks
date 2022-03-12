const add = document.querySelector("#addUSer");
const table = document.querySelector("#tableBody")
const heads = ['name','balance','address'] // 'accountNumber', 
const read = (StorageKey)=>{
    let data
    try {
        data = JSON.parse(localStorage.getItem(StorageKey))
        if(!Array.isArray(data))throw new Error ("is not Array")
    }
    catch (e) {
        data = [] 
    }
    return data
}
const write = (data, StorageKey)=>{
    localStorage.setItem(StorageKey, JSON.stringify(data))
}
const submitInfo = function(e){
    e.preventDefault()
    let info = {id:Date.now(), createdAt: new Date()}
    heads.forEach(head => info[head]=this.elements[head].value)
    const information = read("information")
    information.push(info)
    write(information, "information")
    this.reset()
    window.location.href="index.html"
}
const creatElement = (parent, HtmlElement, text, classs)=>{
    const el = document.createElement(HtmlElement)
    parent.appendChild(el)
    if(text) el.textcContent = text
    if(classs) el.className = classs
    return el
}
const del = (information, i)=>{
    information.splice(i, 1)
    write(information, "information")
    showAll()
}
const show = (info, i , information, table)=>{
    const tr = creatElement(table, "tr", null, null)
    creatElement(tr, "td", i+1, null)
    creatElement(tr, "td", Date,now(), null)
    heads.forEach(head=>creatElement(tr,"td",info[head],null))
    const actions = creatElement(tr,"td",null,null)
    const showBtn = creatElement(actions, "button", "Show", "btn btn-primary me-2")
    const editBtn = creatElement(actions, "button", "Edit", "btn btn-primary me-2")
    const deleteBtn = creatElement(actions, "button", "Delete", "btn btn-primary me-2")
    deleteBtn.addEventListner("click", ()=>{del(information, i)})
}
const showAll= (table)=>{
    table.innerHTML = ""
    const information = read("information")
    information.forEach((info, index)=> show(info, index, information, table))
}
if(add) add.addEventListener("submit", submitInfo)
if(table) showAll(table)