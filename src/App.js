import react, {PureComponent} from 'react'
import './css/reset.css';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return(
            <div>

                <div>
                    <div className="header bg-dark d-flex justify-content-center">
                        <h5 className="text-white p-2 w-50">TodoApp</h5>
                    </div>
                </div>

                <div className="Main-input bg-light d-flex justify-content-center p-5">
                    <div>
                        <h2>Welcome!</h2>
                        <p>To get started, add some items to your list:</p>
                        <div className="inp-btn d-flex justify-content-center align-content-between">
                            <input className="form-control mr-3 " type="text"/>
                            <button className="btn btn-primary" type="submit">add</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                    <nav className="w-25">
                        <div className="nav nav-tabs">
                            <a className="nav-item nav-link active">Home <span className="badge badge-danger">4</span></a>
                            <a className="nav-item nav-link">Profile <span className="badge badge-success">4</span></a>
                        </div>
                    </nav>
                    <div className="tab-content w-25 mt-3">
                        <div className=" w-100 tab-pane fade show active">
                            <class className="mb-2 d-flex justify-content-between border rounded-3 p-2 align-items-center ">
                                <h5 className="m-0">Hello Roocket</h5>
                                <div>
                                    <button className="btn btn-info btn-sm">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delet</button>
                                </div>
                            </class>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
