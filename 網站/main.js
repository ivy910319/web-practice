// window.onload=function(){
    //alert("Hi")
// };
let imgURL_array=[
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://linky.tw/wp-content/uploads/2018/06/57eca2287749c_1024-1000x600.jpg",
    "https://www.costco.com.tw/medias/sys_master/images/h7d/h9a/9979438596126.jpg"
];

$(function(){
    $("input").on("click",function(){
        //alert("Hi")
        //$("h1").text("Hello");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber)
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imgURL_array[randomChildNumber]);
    });
});