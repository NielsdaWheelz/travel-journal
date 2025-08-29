import viteLogo from '../assets/vite.svg'

function Header() {
    return(
        <header>
            <div className="header-container">
                <img src={viteLogo} alt="Vite Logo" />
                <h2>My travel journal</h2>
            </div>
        </header>
    )
}

export default Header