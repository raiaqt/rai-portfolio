import React from "react";
import "./Header.scss";

const navItems = [
  { id: "nerd-side", label: "Build", hint: "Left column" },
  { id: "movement-side", label: "Move", hint: "Right column" },
  { id: "contact", label: "Contact", hint: "Footer" },
];

const Header: React.FC = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <nav className="header-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="link-button"
              onClick={() => handleClickScroll(item.id)}
              title={item.hint}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
