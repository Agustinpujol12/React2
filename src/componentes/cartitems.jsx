const cartitems = ({ count = 0 }) => {
return(
    <div className="position-absolute bg-primary">
        <span style={{fontSize :"20px", color:"white"}}>{count}

        </span>
    </div>
);
};

export default cartitems