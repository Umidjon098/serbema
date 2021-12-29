import React from "react";
import List from "../../../../../assets/images/list.svg";

function ExpectCard() {
  return (
    <div className="expect-card">
      <div className="icon">
        <img src={List} alt={""} />
      </div>
      <div className="text-content">
        <div className="title">Publication</div>
        <div className="description">
          All accepted and presented papers of the 2nd International Conference
          on Energetics, Civil and Agricultural Engineering 2021 will be
          submitted for publication in open access E3S Web of Conferences,
          American Institute of Physics AIP Conference Proceedings, and IOP
          Conference Series: Earth and Environmental Science journals indexed in
          SCOPUS and/or Web of Science.
        </div>
      </div>
    </div>
  );
}

export default ExpectCard;
