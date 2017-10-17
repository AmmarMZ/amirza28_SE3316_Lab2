var arrays = ['Apples',"Kiwis","Bananas","Oranges","Mangos","Peaches","Pears","Grapes","Plums","Pineapples","Watermelons"];
var check = false;

function load()
{
    var fruitShelf = document.getElementById('listOfFruits');
    if (check)
    {
        fruitShelf.innerHTML=' ';
    }
    
    for (var i = 0; i < arrays.length; i++)
    {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(arrays[i]));
    fruitShelf.appendChild(item);
    }
}

function enterFruit()
{
var fruit = document.getElementById('newfruit').value
var form = document.getElementById('newfruit')

   for (var i = 0; i < arrays.length; i++)
   {
       if(fruit == arrays[i])
       {
           arrays.splice(i,1);
           removeFruit(fruit);
           check = true;
           load();
           form.value = '';
           return;
       }
   }
   alert(fruit +" is not the fruit shelf");
}

function removeFruit(fruit)
{
    var basketList = document.getElementById('basketList');
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(fruit));
    basketList.appendChild(item);
}

