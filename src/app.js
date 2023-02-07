import { User } from "./Users";

const userData = async () => {
    const rawData = await fetch("https://randomuser.me/api/?results=20");
    const dataJSON = await rawData.json();
    console.log(dataJSON.results);
    return dataJSON;
}

const renderUser = async (incomingData) => {
    const data = await incomingData;
    const results = data.results;
    const userList = [];
    for(let i = 0; i < results.length; i++){
        userList.push(
          new User(
            results[i].name.title,
            results[i].name.first,
            results[i].name.last,
            results[i].location.city,
            results[i].location.country,
            results[i].dob.age,
            results[i].email,
            results[i].picture.large
          )
        );
    }
    console.log(userList);
    const main = document.querySelector("main");
    for(let i = 0; i < userList.length; i++){
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.dataset.present = userList[i].presence;
        const childHTML = `
		<img src="${userList[i].photo}">
		<div class="user--info">
				<h1>${userList[i].title} ${userList[i].firstName} ${userList[i].lastName}</h1>
				<p>${userList[i].age} years old</p>
				<p>${userList[i].city}, ${userList[i].country}</p>
		</div>
        <a href="mailto:${userList[i].email}">
				<span class="mail">✉️</span>
		</a>
    `;
        containerElement.insertAdjacentHTML("afterbegin", childHTML);
        main.insertAdjacentElement("afterbegin", containerElement);
        containerElement.addEventListener("click", (e) => {
                switch (e.target.dataset.present) {
                    case true:
                        e.target.dataset.present = true;
                    case false:
                        e.target.dataset.present = false;
                }
            }) 
    }
}
renderUser(userData());