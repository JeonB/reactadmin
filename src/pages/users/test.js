fetch('https://www.fruityvice.com/api/fruit/all')
  .then(res => res.json())
  .then(data => console.log(data));
