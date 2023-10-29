function Header({ setSearchInput }) {
  return (
    <header className="header">
      <h1>Gallery Title</h1>
      <div className="form-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </header>
  );
}

export default Header;
