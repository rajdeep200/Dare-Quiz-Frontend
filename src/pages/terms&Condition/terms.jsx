import React from "react";
import "./terms.css";

const TermsPage = () => {
  return (
    <div className="terms">
      <h3 className="terms__heading">Terms & Conditions</h3>
      <div className="terms__details">
        Dareyoumate.online and all of its subdomains are only available to
        those over the age of eighteen. <br />
        <br />
        Copyright protection is applied to every content. Images used in this site are taken from <a href="https://www.flaticon.com/">www.flaticon.com</a> <br />
        <br />
        Content that is illegal, profane, racist, or threatening is not
        permitted. <br />
        <br />
        Any listing submitted is subject to review and modification by us.{" "}
        <br />
        <br />
        Any infringement or breach of copyright is not tolerated. <br />
        <br />
        Dareyoumate has complete discretion over whether or not to list any
        submission and whether or not to make any changes to that submission for
        any reason. <br />
        <br />
        Without our written permission, you may not redistribute or display any
        of our content on another website. <br />
        <br />
        Your account may be terminated if you violate any of these terms. At any
        moment, we reserve the right to make changes to our Terms of Service.
      </div>
    </div>
  );
};

export default TermsPage;
