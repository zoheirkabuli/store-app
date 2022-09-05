import { useLocation, useNavigate, useParams } from "react-router-dom";

function WithRouter(Child) {
  return function WithRouter(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    // other relevant props

    return (
      <Child
        {...props}
        location={location}
        navigate={navigate}
        params={params}
      />
    );
  };
}

export default WithRouter;
