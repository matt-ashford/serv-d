import { Link } from "react-router-dom";

export const NotFoundPage = (props) => {
  return (
    <>
      <div> 404 not found</div>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;
