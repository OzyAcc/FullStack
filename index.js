async function getData() {
    const response = await fetch("https://api.github.com/users/mosayed4");
    const profile = await response.json();
    console.log(profile)
    display(profile)
}
getData()

function display (profile){
    const container = document.getElementById("contanier");
    const data = `
    <div class="product">
<p>${profile.name}</p>
<p>${profile.bio}</p>
<p>${profile.public_repos}</p>
<img src="${profile.avatar_url
}">
</div>
`
   container.innerHTML = data
}