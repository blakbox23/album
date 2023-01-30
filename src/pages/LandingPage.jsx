import AppNav from "../components/AppNav"


function LandingPage(){

    const user = sessionStorage.getItem('albumUser');

    console.log("loggedIn from landing page")
    console.log(user)
    return (
    <>
    <AppNav />
    <p>landing page</p>
    </>
    )
}

export default LandingPage