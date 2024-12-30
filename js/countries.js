const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all') 
    .then(res=>res.json())
    .then(data=>displayCountries(data)
    )
 }
 loadCountries()

 const displayCountries=(countries)=>{

     // countries.forEach(country => console.log(country))

     const displayDiv=document.getElementById('countries')
     countries.forEach(country=>{
         const div =document.createElement('div')
         div.classList.add('country')
         
         div.innerHTML=`
         <div >
             <img src="${country.flags.png}" alt="">
             <h3>Name: ${country.name.common} </h3>
             <p>Capital: ${country.capital} </p>
             <button onclick="loadCountryDetails('${country.name.common}')">Show Details</button>
         </div>
         `
         displayDiv.append(div)

     })

 }

 const loadCountryDetails=(countyName)=>{
     console.log(countyName);
     
     fetch(`https://restcountries.com/v3.1/name/${countyName}`)
     .then(res=>res.json())
     .then(data=>displayCountryDetails(data[0]))

 }
 const displayCountryDetails=(country)=>{
     const detailsUi = document.getElementById('details')
     detailsUi.innerHTML=`
     <div class ="country">
         <img src="${country.flags.png}" alt="">
         <h3>Name: ${country.name.common} </h3>
         <p>Capital: ${country.capital} </p>
         <p>Population: ${country.population} </p>
         
     </div>

     `
     

 }