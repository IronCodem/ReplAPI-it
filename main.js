document.cookie = "Entry=Welcome!";

document.getElementById("invite").addEventListener("click", function() {
  window.open('https://discord.com/oauth2/authorize?client_id=822105903599058994&permissions=8&scope=applications.commands%20bot')
});
if(document.getElementById('body').style.display == "none") {
  document.getElementById('wow').style.display = "block"
} else {
  document.getElementById('wow').style.display = "none"
}
