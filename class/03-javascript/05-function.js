

const auth = String(Math.floor(Math.random() * 1000000)).padStart(6, 0)



const hello = () => {
    document.getElementById("number").innerText = auth
    document.getElementById("number").style.color = "#" + auth
}