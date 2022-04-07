import React,{useEffect, useState} from 'react';

const App = () =>{
  const [data, setData] = useState([]);

  const getData = async ()=>{
    const res = await fetch('https://api.publicapis.org/entries');
    const curentData = await res.json();
    setData(curentData.entries);
    
    
}
  useEffect(()=>{
     getData();
   },[])
  
  return(
     <>
      <table border="1">
            <thead>
                  <tr>
                      <th>API</th>
                      <th>Auth</th>
                      <th>Category</th>
                      <th>Cors</th>
                      <th>Description</th>
                      <th>Link</th>
                  </tr>
            </thead>
            <tbody>
              {
                data.map((Ele, ind)=>{
                  return(
                    <>
                       <tr key={ind}>
                         <th>{Ele.API}</th>
                         <td>{Ele.Auth}</td>
                         <td>{Ele.Category}</td>
                         <td>{Ele.Cors}</td>
                         <td>{Ele.Description}</td>
                         <td>{Ele.Link}</td>
                       </tr>
                    </>
                  )
                })
              }
             </tbody>
      </table>
    </>
     )
  }
export default App;