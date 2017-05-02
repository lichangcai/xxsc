/**
 * Created by lcc on 17-4-27.
 */
// $(".problem").click(function () {
//     for(var i= 0;i<$(".problem ").length;i++){
//         $(".problem ")[i].index = i;
//     }
//     var p = this.index;
//     $(".problem ").removeClass("active")
//     $(".problem ").eq(p).addClass("active")
// })
$(".problem").find(".xiao").click(function(){
    $(this).addClass("active")
    $(this).next($(".problem").siblings(".xiao").addClass("active"))
    $(this).siblings(".xiao").removeClass("active")
})
//事件响应
new clickEvent('q1_l', 'q1_r', 0);
new clickEvent('q2_l', 'q2_r', 1);
new clickEvent('q3_l', 'q3_r', 2);
new clickEvent('q4_l', 'q4_r', 3);
new clickEvent('q5_l', 'q5_r', 4);

function clickEvent(id1, id2, index) {
    $('#' + id1).click(function () {
        setTimeout(function () {
            showSlideDown(index);
        }, 500);
    });
    $('#' + id2).click(function () {
        setTimeout(function () {
            showSlideDown(index);
        }, 500);
    })
}

//问题处理

function showSlideDown(index) {
    // for (var num = 0; num < 5; num++) {
    //     $('#q' + num).css("display", "none");
    // }
    var qNum = index + 2;
    $('#q' + qNum).slideDown();
    // $('#q' + qNum).css("display", "block");
}
