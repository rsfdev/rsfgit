//Styling the big red square by getElementBy 
var stack=document.getElementById("stack")
stack.style.backgroundColor="red"

//Styling the columns by getElementsByClassName
function style_column(column_position, color){
    var column=document.getElementsByClassName("column_"+column_position)[0]
	column.style.backgroundColor=""+color
}

//Styling the violet and purple square by querySelectorAll 
function style_big_squares(which_column_class_name, color){
    document.querySelectorAll(which_column_class_name+"> div").forEach((e)=>{
	e.style.backgroundColor=""+color
})}

//Using functions
style_column("left","blue")
style_column("right","green")

style_big_squares(".column_left", "violet")
style_big_squares(".column_right", "purple")
//stying pink squares inside the violet and purple squares

//Styling all mini divis
document.querySelectorAll("div>div>div>div").forEach((mini)=>{
	mini.style.backgroundColor="orange"
})
//Styling only mini divs on the top
document.querySelectorAll("#stack>div").forEach((e)=>{
    var mini_top=document.querySelector("."+e.className+">div>div")
	mini_top.style.backgroundColor="pink"

})
