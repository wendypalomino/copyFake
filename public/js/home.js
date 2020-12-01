document.addEventListener('DOMContentLoaded', () => {
    document
      .getElementById('myForm')
      .addEventListener('submit', handleForm);
  });

  function handleForm(ev) {

    ev.preventDefault();
    const myForm = ev.target;
    const formData = new FormData(myForm);
    const formDataJson = convertFormDataToJSON(formData)
    console.log(formDataJson)
    
    //Send data to backend

    

  }

  function convertFormDataToJSON(formData) {
    const obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return JSON.stringify(obj);
  }
 

//     //send the request with the formdata
//     let url = 'http://localhost:3000/usuario';
//     let h = new Headers();
//     h.append('Content-type', 'application/json');

//     let req = new Request(url, {
//       headers: h,
//       body: json,
//       method: 'POST',
//     });
   
//     fetch(req)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Response from server');
//         console.log(data);
//       })
//       .catch(console.warn);
//   }




// const myForm = document.getElementById('inscripcion')
// console.log(myForm)

// handleUpdate = async() => {
   
//     const formData = new FormData()
//     formData.append('celular',localStorage.getItem('celular'))
//     formData.append('correo',localStorage.getItem('email'))

//     await Api.patchData('http://localhost:3001/api-csi-service/socio/0235401', formData)
    
    
// }



