$(document).ready(function(){
    // Extract text from paragraphs with class 'info'
    $(".product-grid").each(function(){
        console.log($(this).text());
    });

    // Extract text from list items
    $("ul li").each(function(){
        console.log($(this).text());
    });

    // Traverse the DOM to find specific elements
    var firstListItem = $("ul").children("li").eq(0).text();
    console.log("First list item text: " + firstListItem);

    var secondListItem = $("ul").children("li").eq(1).text();
    console.log("Second list item text: " + secondListItem);
});