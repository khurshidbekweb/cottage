import React from 'react'
import AddRegion from '../../Modal/AddRegion'

function Region() {
  return (
    <div>
      <div className='place'>
        <div className="place-haed d-flex justify-content-between">
            <h2>Region</h2> 
            <AddRegion/>      
        </div>
        <div className="language-inner">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Chorbog'</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Chirchiq</td>
                    </tr>
                </tbody>
            </table>
        </div>         
    </div>
    </div>
  )
}

export default Region