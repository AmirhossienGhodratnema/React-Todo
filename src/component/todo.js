import React, { useState } from 'react';


function Todo(props) {

    let {data} = props;

    console.log('data.done' , data.done)


    return(
        <div className=" w-100 tab-pane fade show active">
            <div
                className="mb-2 d-flex justify-content-between border rounded-3 p-2 align-items-center ">
                <h5 className="m-0">{data.text}</h5>
                <div>
                    <button className="btn btn-success btn-sm">done</button>
                    <button className="btn btn-info btn-sm mx-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Delet</button>
                </div>
            </div>
        </div>
    )
}

export default Todo;