import React, { useState } from 'react';




function AddTodo(props) {

    const [text, setText] = useState('');

    let getData = (e) => {
        setText(e.target.value)

    };


    let inputhandler = (e) => {
        let {getText} = props
        e.preventDefault();
        getText(text);
        setText('')
    }
    return(
        <div>
            <h2>Welcome!</h2>
            <p>To get started, add some items to your list:</p>
            <form className="inp-btn d-flex justify-content-center align-content-between">
                <input className="form-control mr-3 btnStyle" type="text" value={text}
                       onChange={getData}/>

                <button className="btn btn-primary" type="submit"
                        onClick={inputhandler}>add
                </button>
            </form>
        </div>
    )
}

export default AddTodo;