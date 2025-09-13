// some external function part:

// remove active function
const removeActive = () => {
 const className = document.querySelectorAll(".make-class ");
     className.forEach(data => data.classList.remove("active"));
}

// calculate totaL FUNCTION
const updateTotalPrice = () => {
    const totalDiv = document.getElementById('total-price');
    totalDiv.innerText = `Total: ${totalPrice}`;
}

// loading function
const manageSpinner = (status) => {
  if(status == true){
    document.getElementById('loader').classList.remove(('hidden'));
    document.getElementById('load-card').classList.add('hidden');
  }
  else{
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('load-card').classList.remove('hidden');
  }
}





// load-part:

// 1
const loadCetagory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {

      displayCetagory(data.categories);
    });
};
// 2
const loadCard = (id) => {
  manageSpinner(true);

  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => {

    removeActive()   // first remove the active class
     const selectBtn = document.getElementById(`btn-${id}`) //then
       selectBtn.classList.add('active'); // add the active class on click the btn 
       displayCard(data.plants)
  } )
    
}
// 3    
const loadModal = (id)  => {
      fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
      .then(res => res.json())
      .then(data => displayModal(data.plants))
}






// display part:

// 3
const displayModal = (call) => {
     const modal = document.getElementById('modal-call');
     modal.innerHTML = `
     <h3 class="text-2xl font-bold">${call.name}</h3>
    <img class="w-full h-[400px] my-5 rounded-xl" src=${call.image} alt="">
    <p> <span class="font-bold">Category:</span> ${call.category}</p>
    <p><span class="font-bold ">Price:</span> <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${call.price}</p>
    <p class="py-4"> <span class="font-bold">Description:</span> ${call.description}</p>
     
     `;


document.getElementById('my_modal_5').showModal();
              
}


// 2
const displayCard = (call) =>{
    const loadCard = document.getElementById('load-card');
    loadCard.innerHTML = '';

    // if(loadCard){
    //     loadCard.innerHTML = ` <p> broooooooooooo </p> `;
    //     return;
    // }

    for(let data of call ){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="card bg-base-100 max-w-140 shadow-sm h-[600px]">
            <figure>
              <img class="w-full" src=${data.image} alt="" />
            </figure>
            <div class="p-4">
              <h2 onclick="loadModal(${data.id})" class="card-title">${data.name}</h2>
              <p class="pt-1">
                ${data.description}
              </p>
              <div class="flex justify-between items-center py-3">
                <button
                  class="py-1 px-3 rounded-3xl bg-[#DCFCE7] text-[#15803D]"
                >
                  ${data.category}
                </button>
                <p class="font-bold">
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>${data.price}
                </p>
              </div>
              <div class="card-actions w-full">
                <button onclick="ourBtn(${data.id})" class="btn btn-primary w-full">Add Cart</button>
              </div>
            </div>
          </div>
        `;
        loadCard.appendChild(div);
    }
    manageSpinner(false)
}

// 1
const displayCetagory = (call) => {
      
    const cetagory = document.getElementById('load-cetagory');
    cetagory.innerHTML = '';

    call.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = ` 
          <p  id="btn-${data.id}" onclick="loadCard(${data.id})"  class="p-2  rounded-lg hover:bg-[#15803c] mt-10.5      make-class"> 
          ${data.category_name} </p> 
        `;
        cetagory.appendChild(div);
    })
}

// function call:
loadCetagory();



// default all plant show:  // default dashboard view :
const allPlants = () => {
  manageSpinner(true);

    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => displayAllPlants(data.plants))
}
const displayAllPlants = (plants) => {
  const loadCard = document.getElementById('load-card');
    loadCard.innerHTML = '';

    

    for(let data of plants ){
        const div = document.createElement('div');
        div.innerHTML = ` 
        <div class="card bg-base-100 max-w-140 shadow-sm h-[600px]">
            <figure>
              <img class="w-full" src=${data.image} alt="" />
            </figure>
            <div class="p-4">
              <h2 onclick="loadModal(${data.id})" class="card-title">${data.name}</h2>
              <p class="pt-1">
                ${data.description}
              </p>
              <div class="flex justify-between items-center py-3">
                <button
                  class="py-1 px-3 rounded-3xl bg-[#DCFCE7] text-[#15803D]"
                >
                  ${data.category}
                </button>
                <p class="font-bold">
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>${data.price}
                </p>
              </div>
              <div class="card-actions w-full">
                <button onclick="ourBtn(${data.id})" class="btn btn-primary w-full">Add Cart</button>
              </div>
            </div>
          </div>
        `;
        loadCard.appendChild(div);
    }
    manageSpinner(false)
}
allPlants();



