

function AddRegion() {
  return (
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            ADD REGION
        </button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className='p-4'>
                        <select name="region" id="region-dash">
                            <option value="tashkent">Toshkent</option>
                            <option value="tashkent">Toshkent</option>
                            <option value="tashkent">Toshkent</option>
                            <option value="tashkent">Toshkent</option>
                            <option value="tashkent">Toshkent</option>
                        </select>
                        <button type='submit' className='btn-modal bg-success border-0 fs-6 fw-bold rounded-2 text-white d-block'> Add</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRegion