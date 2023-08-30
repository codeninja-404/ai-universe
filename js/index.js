const loadData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const aiData = data.data.tools;
  displayData(aiData);
};

const displayData = (aiData) => {
  const dataContainer = document.getElementById("data-container");
  aiData.forEach((data) => {
    const dataCard = document.createElement("div");
    dataCard.innerHTML = `
    <div class="card bg-gray-100 shadow-xl p-6">
          <figure class="">
            <img onerror="replaceImg(this)"
              src=${data?.image}
              class="w-full max-h-72 rounded-lg"
            />
          </figure>
          <div class="card-body border-b-2">
            <h2 class="card-title font-bold">Features</h2>
            <p>
              1. <span>${data?.features[0] || "Not found!"}</span>
            </p>
            <p>
              2. <span>${data?.features[1] || "Not found!"}</span>
            </p>
            <p>
              3. <span>${data?.features[2] || "Not found!"}</span>
            </p>
          </div>
          <div class="card-body">
            <h2 class="card-title font-bold">${data?.name}</h2>
            <p>
              <i class="fa-regular fa-calendar-minus"> </i>
              <span>${data?.published_in}</span>
            </p>
          </div>
        </div>
    `;
    console.log(data);
    dataContainer.appendChild(dataCard);
  });
};
const replaceImg = (target) => {
  target.src = "https://fakeimg.pl/250x120/?text=Image not found&font=lobster";
};
loadData();
