var isDone = false
function addAudio() {
    console.log("boas")
    if (!isDone)
    {
        isDone = true
        document.getElementById("audio").play()
    }
}