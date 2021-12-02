let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subListElement =document.getElementById("iqno").getElementsByTagName("LI");  data.forEach((item,i) => {
    if(subListElement.length > i)
      {
        try { if(subListElement[i].getAttribute('annotationname') === "username") subListElement[i].textContent = data[i].username ; } catch (e) { console.log(e) };
      }
    });
    [...subListElement].forEach((element,index) => {if(index > data.length) subListElement[index].remove()})}});};