export class User {
  constructor(title, firstName, lastName, city, country, age, email, photo) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.country = country;
    this.age = age;
    this.email = email;
    this.photo = photo;
    this.presence = false;
  }
  /*userHTML(){
    const containerElement = document.createElement("div");
    containerElement.classList.add("user");
    containerElement.dataset.present = this.presence;

    const childHTML = `
		<img src="${this.photo}">
		<div class="user--info">
				<h1>${this.title} ${this.firstName} ${this.lastName}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		</div>
    `;

    containerElement.insertAdjacentHTML("afterbegin", childHTML);
    return containerElement;
  }*/
}