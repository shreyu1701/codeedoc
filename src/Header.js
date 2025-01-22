import { useNavigate } from "react-router-dom";
import logo from "./img/Black-Codeedoc-Transparant-201x74.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
        </a>
        <div>
          <button
            className="bg-black text-white py-2 px-4 rounded-md shadow hover:bg-[#008000] transition"
            onClick={() => navigate("/consultation")}
          >
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
