window.onload = () => {
  makeAjaxCall();
};

const makeAjaxCall = async () => {
  const url = "https://reqres.in/api/users";

  const res = await axios.get(url);

  for (let item of res.data.data) {
    const output = document.querySelector("#output");

    const newElement = `<div style="background: lightblue; display: flex; margin-bottom: 8px">
                            <img src="${item.avatar}" alt="" />
                            <div>
                            <h3>${item.first_name} ${item.last_name}</h3>
                            <h6>${item.email}</h6>
                            </div>
                        </div>`;
    output.innerHTML = newElement + output.innerHTML;
  }
};
