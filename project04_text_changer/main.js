const changeText = function(){
    document.querySelector('h1').innerHTML = "Hello World!"
}
const changeMe = setTimeout(changeText, 5000)
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})