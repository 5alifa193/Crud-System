
// start 
var productName = document.getElementById('productName');
var productCategory = document.getElementById('productCategory');
var productPrice = document.getElementById('productPrice');
var productDescription = document.getElementById('productDescription');

var mood = 'create';

arrayADD=[];
var products;
var iChanger;


function getValue(){
    products = {
    nameValue : productName.value,
    categoryValue : productCategory.value,
    priceValue : productPrice.value,
    descriptionValue : productDescription.value,
}
if(mood==='create'){
    arrayADD.push(products)
}
else if(mood==='update'){
    arrayADD[iChanger]=products;
    document.getElementById('changeUpdate').innerHTML = 'Add product';
    mood='create';
}
    clearFrom();
    addTable();
}

function clearFrom(){
    productName.value = '';
    productCategory.value = '';
    productPrice.value = '';
    productDescription.value = '';
}

function addTable(){
        var trs = '';
        for (var i=0; i<arrayADD.length; i++){
            trs += `<tr>
            <td scope="row">${arrayADD[i].nameValue}</td>
            <td>${arrayADD[i].categoryValue}</td></td>
            <td>${arrayADD[i].priceValue}</td>
            <td>${arrayADD[i].descriptionValue}</td>
            <td>
            <button onclick="updateData(${i});" class="btn btn-success me-2">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          </td>
          <td>
          <button onclick="deleteItem(${i})" class="btn btn-danger">
          <i class="fa-solid fa-trash"></i>
        </button></td>
        </tr>`;
        }
        document.getElementById('tableBody').innerHTML = trs;
}

function deleteItem(index){
    arrayADD.splice(index , 1);
    addTable();
}


var tbody = document.getElementById('tableBody');
function searching(){
    var searchInput = document.getElementById('searchInput');
    var trs='';
    for(var i = 0 ;i<arrayADD.length ; i++){
        if(arrayADD[i].nameValue.toLowerCase().includes(searchInput.value.toLowerCase())){
            trs +=`<tr>
            <td scope="row">${arrayADD[i].nameValue}</td>
            <td>${arrayADD[i].categoryValue}</td></td>
            <td>${arrayADD[i].priceValue}</td>
            <td>${arrayADD[i].descriptionValue}</td>
            <td>
            <button onclick="updateData(${i});" class="btn btn-success me-2">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          </td>
          <td>
          <button onclick="deleteItem(${i})" class="btn btn-danger">
          <i class="fa-solid fa-trash"></i>
        </button></td>
        </tr>`
        }
        tbody.innerHTML = trs;
        }
    }

    function updateData(i){
        productName.value= arrayADD[i].nameValue;
        productCategory.value=arrayADD[i].categoryValue;
        productPrice.value=arrayADD[i].priceValue;
        productDescription.value=arrayADD[i].descriptionValue;
        document.getElementById('changeUpdate').innerHTML = 'Update';
        mood ='update';
        iChanger=i;
}

