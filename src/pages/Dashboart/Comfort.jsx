import React from 'react'

function Comfort() {
  return (
    <div className='comforts'>
           <div className="language-haed d-flex justify-content-between">
            <h2>Language</h2>           
        </div>
        <div className="language-inner">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>uz</td>
                        <td>O'zbek tili</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>en</td>
                        <td>Ingliz tili</td>
                    </tr>
                </tbody>
            </table>
        </div>         
    </div>
  )
}

export default Comfort