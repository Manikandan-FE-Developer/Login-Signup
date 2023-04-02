let firstnameRef=document.getElementById("firstname");
let lastnameRef=document.getElementById("lastname");
let emailRef=document.getElementById("email");
let passwordRef=document.getElementById("password");
let submitBtn=document.getElementById("submit");
let messageRef=document.getElementById("message-ref");
let isFirstnameValid=()=>{
	const firstnameRegex=/^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
	return firstnameRegex.test(firstnameRef.value);
};
let isLastnameValid=()=>{
	const lastnameRegex=/^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
	return lastnameRegex.test(lastnameRef.value);
};
let isEmailValid=()=>{
	const emailRegex=/^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
	return emailRegex.test(emailRef.value);
};
let isPasswordValid=()=>{
	const passwordRegex=/^[a-zA-Z][a-zA-Z0-9]{8,22}/gi;
	return passwordRegex.test(passwordRef.value);
};
firstnameRef.addEventListener("input",()=>{
	if(!isFirstnameValid()){
		messageRef.style.visibility="hidden";
		firstnameRef.style.cssText="border-color:#fe2e2e; background-color:#ffc2c2";
	}else{
		firstnameRef.style.cssText="border-color:#34bd34; background-color:#c2ffc2";
	}
});
lastnameRef.addEventListener("input",()=>{
	if(!isLastnameValid()){
		messageRef.style.visibility="hidden";
		lastnameRef.style.cssText="border-color:#fe2e2e; background-color:#ffc2c2";
	}else{
		lastnameRef.style.cssText="border-color:#34bd34; background-color:#c2ffc2";
	}
});
emailRef.addEventListener("input",()=>{
	if(!isEmailValid()){
		messageRef.style.visibility="hidden";
		emailRef.style.cssText="border-color:#fe2e2e; background-color:#ffc2c2";
	}else{
		emailRef.style.cssText="border-color:#34bd34; background-color:#c2ffc2";
	}
});
passwordRef.addEventListener("input",()=>{
	if(!isPasswordValid()){
		messageRef.style.visibility="hidden";
		passwordRef.style.cssText="border-color:#fe2e2e; background-color:#ffc2c2";
	}else{
		passwordRef.style.cssText="border-color:#34bd34; background-color:#c2ffc2";
	}
});
submitBtn.addEventListener("mouseover",()=>{
	if(!isFirstnameValid()||!isLastnameValid()||!isEmailnameValid()||!isPasswordValid()){
		let containerRect=document
		.querySelector(".container")
		.getBoundingClientRect();
		let submitRect=submitBtn.getBoundingClientRect();
		let offset=submitRect.left-containerRect.left;
		console.log(offset);
		if(offset<=100){
			submitBtn.style.transform="translateX(16.25em)";
		}
		else{
			submitBtn.style.transform="translateX(0)";
		}
	}
});
submitBtn.addEventListener("click",()=>{
	messageRef.style.visibility="visible";
});