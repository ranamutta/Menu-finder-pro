import menu from './database.js';
const menuContainer=document.getElementById("menu-container")
const filterButton=document.querySelectorAll(".filter-btn")




document.addEventListener("DOMContentLoaded", () => {
       displayMenu(menu)
})

function displayMenu(menuItems) {

      let dispMenu = menuItems.map((menuItems) =>
              `<div class="d-flex align-items-center gap-3 flex-column flex-md-row my-2" id="card">
                    <img src=${menuItems.img} alt="" id="image" class="rounded shadow">
                      <div>
                          <div class="d-flex justify-content-between ">
                           <h5>${menuItems.title}</h5>
                           <p>$${menuItems.price}</p>
                         </div>
                      <p class="lead">${menuItems.desc}</p>
              </div>
            </div>`
       )

dispMenu=dispMenu.join('')
menuContainer.innerHTML=dispMenu
}


filterButton.forEach((button)=>{
       button.addEventListener("click",(e)=>{
           const category=e.target.dataset.id
           searchCategory(category)
       })
})

function searchCategory(categoryInfo){
    const filteredMenu= menu.filter((menuItems)=>{
           if(categoryInfo===menuItems.category)
           return menuItems
    })

if(categoryInfo=== "all") {
       displayMenu(menu)
}else{
       displayMenu(filteredMenu)
}

}