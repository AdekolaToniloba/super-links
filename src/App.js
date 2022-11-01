import myProfile from "./assets/myProfile.jpg";
import slack from "./assets/slack.png";
import github from "./assets/github.png";
import vector from "./assets/Vector.png";
import ingressive from "./assets/I4G.png";
import "./styles.css";
function App() {
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-img">
          <img src={myProfile} id="profile_img" alt="profile-image" />
        </div>
        <div className="username">
          <h3 id="twitter">Adekola Toniloba</h3>
          <h3 id="slack">Toniloba</h3>
        </div>
      </div>

      <div className="links">
        <ul>
          <li>
            <button id="Twitter_link">
              <a href="https://twitter.com/atoniloba" target="_blank">
                {" "}
                Twitter Link
              </a>
            </button>
          </li>

          <li>
            <button id="btn_zuri">
              <a href="https://training.zuri.team/" target="_blank">
                {" "}
                Zuri Training
              </a>
            </button>
          </li>

          <li>
            <button id="book_python">
              <a href="https://books.zuri.team/" target="_blank">
                {" "}
                Python For Beginners
              </a>
            </button>
          </li>

          <li>
            <button id="pitch">
              <a href="https://background.zuri.team/" target="_blank">
                {" "}
                Background Check For Coders
              </a>
            </button>
          </li>

          <li>
            <button id="book_python">
              <a href="https://books.zuri.team/design-rules" target="_blank">
                {" "}
                Design books
              </a>
            </button>
          </li>
        </ul>
      </div>
      <div className="icons">
        <img src={slack} alt="slack icon" />
        <img src={github} alt="github icon" />
      </div>
      <footer>
        <img src={vector} alt="vector icon" />
        <a href="#">HNG Internship 9 Frontend Task</a>
        <img src={ingressive} alt="ingressive icon" />
      </footer>
    </div>
  );
}

export default App;
