const userData = async () => {
    const rawData = await fetch("https://randomuser.me/api/?results=20");
    const dataJSON = await rawData.json();
    console.log(dataJSON.results);

}

userData();