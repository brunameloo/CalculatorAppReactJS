import './Header.css'

function Header(props) {

    const headerStyle = {
        backgroundImage: "linear-gradient(to right, #B310EF, #EF10BC)",
        height: '121px',
        width: '100%',
        color: '#ffffff',
        fontSize: '30px',
        padding:'40px'
    }

    return (
        <header style={headerStyle}>
            <p>CalculatorAPP</p>
        </header>
    )
}

export default Header;