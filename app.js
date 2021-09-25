document.querySelector('body').addEventListener('mousemove' , eyepall);
function eyepall(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let xyz = Math.atan2(event.pageX - x , event.pageY - y); // event.pageX - x , event.pageY - y عشان العين الشمال تبص ناحية الشمال لو حركت الماوس ناحيه الشمال
        let end = (xyz * ( 180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + end + "deg)" // rotate عشان العين تلف بشكل دائري
    })
}
// search about Math.atan2 + Math.PI YOu must learn those from W3schools