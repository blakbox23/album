import socialMediaAuth from "../service/auth";
import { googleProvider } from "../authConfig/authMethods";


function GoogleSignin() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };



  return (
    <div className="GoogleSignin">

      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
    </div>
  );
}

export default GoogleSignin;
