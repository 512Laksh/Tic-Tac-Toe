let loginform=document.getElementById("login-form")
let users=localStorage.getItem('user')
let user=JSON.parse(users)
console.log(user)
	
	let un=document.getElementById("username")
	let errunmsg=document.getElementById("errunmsg")
	let pwd=document.getElementById("password")
	let errpwmsg=document.getElementById("errpwmsg")

function check(){
	user.forEach((v) => {
		if(v.un==un.value){
			if(v.pwd==pwd.value){
				alert("Login successful!");
				window.location.href = "Home.html";
			}
			else{
				errpwmsg.textContent='Incorrect password'
				errpwmsg.style.color='red'
			}
		}
		else{
			errunmsg.textContent='Incorrect username'
			errpwmsg.textContent='Incorrect password'
			errunmsg.style.color='red'
		}
	});
}


loginform.addEventListener("submit", (e)=> {
	e.preventDefault();
	check();
});