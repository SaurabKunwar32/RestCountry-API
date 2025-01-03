import { useModes } from "../hooks/useModes";

export default function header() {
  const [applyDark, setApplyDark] = useModes();

  return (
    <header className={`header ${applyDark ? "darkM" : ""}`}>
      <div className="head_Content Max_wid_Con">
        <h2>
          <a href="/">Where in the world?</a>
        </h2>
        <div
          className="modes"
          id="modes"
          onClick={() => {
            setApplyDark(!applyDark);
            localStorage.setItem("isDarkApplied", !applyDark);
          }}
        >
          <i
            className={`fa-solid fa-${applyDark ? "sun" : "moon"}`}
            id="moon"
          ></i>
          &nbsp;&nbsp;
          <p id="para">{`${applyDark ? "Light" : "Dark"} Mode`}</p>
        </div>
      </div>
    </header>
  );
}
