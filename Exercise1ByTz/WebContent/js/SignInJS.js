function changeCode() {
	var codeImg = document.getElementById("verifyCode");
	codeImg.src = "controller/CreateImageController?t="
			+ Math.random();
}
