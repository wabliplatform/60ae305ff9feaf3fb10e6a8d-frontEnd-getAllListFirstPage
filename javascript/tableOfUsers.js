let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subTableElements =document.getElementById("iv74o").getElementsByTagName("TD");  data.forEach((item,i) => {
    if(subTableElements.length > i)
      {
        try { subTableElements[i].querySelector('[annotationname = username]').textContent = data[i].username ; } catch (e) { console.log(e) };try { subTableElements[i].querySelector('[annotationname = useremail]').textContent = data[i].useremail ; } catch (e) { console.log(e) };try { if(subTableElements[i].getAttribute('annotationname') === "username") subTableElements[i].textContent = data[i].username ; } catch (e) { console.log(e) };
      }
    });
    [...subTableElements].forEach((element,index) => {if(index > data.length) subTableElements[index].remove()})}});};