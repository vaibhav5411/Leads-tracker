
let myLeads=[]
let myoldLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")


// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

let leadsFromLocalStrorage=JSON.parse( localStorage.getItem("myLeads") )


if(leadsFromLocalStrorage){
    myLeads = leadsFromLocalStrorage
    render(myLeads)
}

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    //inputEl.textContent="www.awesomelead.com"
    myLeads.push(inputEl.value)
    inputEl.value= ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

tabBtn.addEventListener("click",function(){
   chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
   })
   
})

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leads){

    let listItems= ""

for(let i=0;i<leads.length;i++){
    //listItems +=  "<li><a target='_blank' href='"+myLeads[i]+"'> " + myLeads[i] + "</a></li> "
    listItems +=  `
    <li>
     <a target='_blank' href='${leads[i]}'>
      ${leads[i]} 
     </a>
    </li> 
    `
}

ulEl.innerHTML=listItems

}

