let counter = 0;
function added() {
    counter++
    document.getElementById('heading').innerHTML=counter;
}
function reset() {
    counter =0;
    document.getElementById('heading').innerHTML=counter;
}
function recade() {
    counter+=' '
    document.getElementById('save').innerHTML+=counter;
    reset ()
}
function resetHistory() {
    reset()
    counter =0;
    document.getElementById('save').innerHTML=counter;
}