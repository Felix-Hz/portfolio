import "./topbar.scss";
import BasicMenu from "../menu/menu"
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar active">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            félix.
          </a>
          <div className="itemContainer">
            <Person class="icon" />
            <span> +54 (011) 5425-0717 </span>
          </div>
          <div className="itemContainer">
            <Mail class="icon" />
            <span> feluhv@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <BasicMenu />
        </div>
      </div>
    </div>
  );
}
