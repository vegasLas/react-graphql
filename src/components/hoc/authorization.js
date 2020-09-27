const { useState } = require("react");
const { Redirect } = require("react-router-dom");


function withAuthRedirect(WrappedComponent) {
    const [isAuth, setIsAuth] = useState(false)
    if (!isAuth) return <Redirect to={<Login />} />
    return <WrappedComponent />
}

export default withAuthRedirect