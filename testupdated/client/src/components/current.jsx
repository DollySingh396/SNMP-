import React, { Component } from 'react';
import './../css/table.css';

class Current extends Component {

    render() {
            let property = {
      ID: 12458789,
      CardID: 1,
      AlarmID: 500,
      Categoery: "xxx",
      Direction: "right",
      WaveLength: 50,
      Severity: 1090,
      OccDate: "2/1/2001",
      OccTime: "8/1/2001",
      Maskbit: 3,
      Cardkey: 7,
      _V: 0
    };

        return (
             <div>
                              <div class="row">
                <div class="col-lg-12">
                   <div class="container">
  <h2>Contextual Table</h2> 
<div id="table-scroll" class="table table-dark table-striped">
  <div class="table-wrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>CardID</th>
              <th>AlarmID</th>
              <th>Categoery</th>
              <th>Direction</th>
              <th>WaveLength</th>
              <th>Severity</th>
              <th>OccDate</th>
              <th>OccTime</th>
              <th>Maskbit</th>
              <th>Cardkey</th>
              <th>_V</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{property.ID}</td>
              <td>{property.CardID}</td>
              <td>{property.AlarmID}</td>
              <td>{property.Categoery}</td>
               <td>{property.Direction}</td>
                <td>{property.WaveLength}</td>
              <td>{property.Severity}</td>
              <td>{property.OccDate}</td>
              <td>{property.OccTime}</td>
              <td>{property.Maskbit}</td>
              <td>{property.Cardbit}</td>
              <td>{property._V}</td>
            </tr>
          </tbody>
    </div>
                </div>
                    </div>
                                  </div>
                </div>
                

     
   </div>
        )


    }



}



export default Current;

