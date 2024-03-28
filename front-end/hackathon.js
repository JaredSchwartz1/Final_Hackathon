const hello="world"

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(res);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      data.forEach((element) => {
        const h2 = document.createElement("h2");
        h2.textContent = element.title;
        body.append(h2);
      });
    } else {
      console.log("there was an error ");
    }
  };