
function Footer(props) {

    const footerStyle = {        
        backgroundImage: "linear-gradient(to right, #B310EF, #EF10BC)",
        height: '121px',
        width: '100%',
        color: '#ffffff',
        fontSize: '20px',
        padding: '45px',
        textAlign: 'center'
    }

    return (
        <header style={footerStyle}>                           
            <p>All rights reserved | Calculator App</p>         
        </header>
    )
}

export default Footer;