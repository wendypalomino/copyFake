document.addEventListener('DOMContentLoaded', () => {
    document
      .getElementById('inscripcionForm')
      .addEventListener('submit', handleForm);
  });

async function  handleForm(ev) {

    ev.preventDefault();
    const inscripcionForm = ev.target;
    const formData = new FormData(inscripcionForm);
    const formDataJson = await convertFormDataToJSON(formData)
    console.log(formDataJson)
    
    //Send data to backend

    const url = 'http://localhost:3000/api-fake-coaching/usuario';
    const header = new Headers();
        header.append('Content-type', 'application/json');

        let req = new Request(url, {
            headers: header,
            body: formDataJson,
            method: 'POST',
          });
        
        fetch(req)
          .then((res) => res.json())
          .catch(console.warn);
    
  }

  function convertFormDataToJSON(formData) {
    const obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
  }
 





