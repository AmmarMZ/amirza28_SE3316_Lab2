

$(document).ready(function()
{
    var gArrays = ['Apples',"Kiwis","Bananas","Oranges","Mangos","Peaches","Pears","Grapes","Plums","Pineapples","Watermelons"];
    load(gArrays);
   
    
    $('#enterFruit').click(function()
    {
        removeFruit(gArrays);
    });
});

 var load = function(arrays)
{   
    $('#listOfFruits').empty();
    for(var i = 0; i < arrays.length; i++)
    {
        var text = arrays[i];
       $('#listOfFruits').append("<li>" + text +"</li>");
    }  
    return;
}

var removeFruit = function(arrays)
{
      for (var i =0; i<arrays.length; i++)
        {
            if ($('#newfruit').val() == arrays[i])
            {
                $('#basketList').append("<li>" + arrays[i] + "</li>");
                $('#newfruit').val('');
                arrays.splice(i,1);
                load(arrays);
                return;
            }
        }
        alert($("#newfruit").val() + " isn't on the fruit shelf" );
}