const inp = document.querySelector("#inp1")
const inp2 = document.querySelector("#inp2")
const sub = document.querySelector("#sub");
const icon = document.querySelector("#icon");
const user = document.querySelector(".user")
sub.addEventListener("click", function() {
    const email = inp.value;
    const password = inp2.value;
    login(email,password)
})
async function login(email,password) {
    const response = await fetch("https://reqres.in/api/login" , {
        method:"POST",
        headers: {
            "Content-type": "application/json ; charset=UTF-8"
        },
        body:JSON.stringify ({
            email:email,
            password:password
        }),
    } )
    const data = await response.json();
    console.log(data);
    if(data.token) {
        window.location.replace("./index.html");
        localStorage.setItem("token", JSON.stringify(data.token))
    }else {
        user.classList.add("go")
        icon.addEventListener("click", function() {
            user.classList.remove("go")
        })
    }

}