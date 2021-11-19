import react,{PureComponent} from "react";
import App from "../../App";




class Header extends PureComponent {
    constructor() {
        super();
    }

    render() {
        return(
            <>
                <div>
                    <div className="header bg-dark d-flex justify-content-center">
                        <h5 className="text-white p-2 w-50">TodoApp</h5>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;