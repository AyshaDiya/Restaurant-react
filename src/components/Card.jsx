import React from 'react'

const Card = () => {
  return (
    <div>
         <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://source.unsplash.com/random/900x700/?burger"

                    className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Burger</h5>
                        <p className="card-text"></p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100  bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total price
                            <button type='button' class='btn btn-primary'>order now</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card
