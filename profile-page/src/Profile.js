function Profile(props) {
    console.log(props);
    return(
        <div>
            Hello world!
            <h1>Hey {props.name}!</h1>
            <h2>Your username is {props.username}</h2>
            Here is your picture: <br/>
            <img src = {props.img} alt = 'user'></img><br/>
            <h5>{props.profile}</h5>
        </div>
    )
}

export default Profile;