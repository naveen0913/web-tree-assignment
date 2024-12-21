import '../Header/Header.css';

function Header() {

  return (
    <div>
      <header
      className='header-container'
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="logo-img"
        />
        <p className="heading-text" >Welcome to React App</p>       
      </header>
    </div>
  );
}

export default Header;
