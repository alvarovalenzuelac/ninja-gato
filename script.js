$("img").on("click",function(){
    let img_src = $(this).attr("src")
    let img_alt_data = $(this).attr("data-alt-src")
    $(this).attr("src",img_alt_data)
    $(this).attr("data-alt-src",img_src)
})