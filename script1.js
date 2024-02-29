let container = document.createElement("div");
container.className = "container";
document.body.append(container);

async function getData() {
  try {
    let covid = await fetch(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    let response = await covid.json();
    container.innerHTML = `<div class="card">
  <div class="card-header">
    <h5 class= "card-title">Chennai</h5>
  </div>
  <div class="card-body">
    <div class="card-text">
    <p>Confirmed : ${response.TN.districts.Chennai.total.confirmed.toLocaleString()}</p>
    <p>Deceased : ${response.TN.districts.Chennai.total.deceased.toLocaleString()}</p>
    <p>Recovered : ${response.TN.districts.Chennai.total.recovered.toLocaleString()}</p>
    <p>Tested : ${response.TN.districts.Chennai.total.tested.toLocaleString()}</p>
    <p>Vaccinated1 : ${response.TN.districts.Chennai.total.vaccinated1.toLocaleString()}</p>
    <p>Vaccinated2 : ${response.TN.districts.Chennai.total.vaccinated2.toLocaleString()}</p>
  </div>
</div>`;
  } catch (error) {
    console.log("API Link not working");
  }
}
getData();
