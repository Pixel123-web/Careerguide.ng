import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { Button } from "react-bootstrap";
const ButtonHelp = () => {
  return (
    <Button>
      Need Help?{" "}
      <BiMessageDetail style={{ fontSize: "25px", marginLeft: "25px" }} />
    </Button>
  );
};

export default ButtonHelp;
