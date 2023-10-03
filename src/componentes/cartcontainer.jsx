import Carticon from "./carticon"
import Cartitems from "./cartitems";

const Cartcontainer = () => {
    return (<div className="bg-secondary px-4">
                <Carticon color="blue"/>
                <Cartitems count={3} />
    </div>
    )
}

export default Cartcontainer; 