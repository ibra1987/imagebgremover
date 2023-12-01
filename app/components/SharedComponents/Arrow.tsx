import React from "react";

const svg =
  '<svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1" style={{ overflow: "visible", }} > <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage" >  <path id="Path-1" className="path"  fill="none" stroke="#db5862"  stroke-width="5" stroke-linejoin="round"  stroke-miterlimit="10"  d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81" /> <path className="dashed"   fill="none"   stroke="white"  stroke-width="8"  stroke-linejoin="round"  stroke-miterlimit="10"  d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"  /> <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="#db5862"> <animateMotion     rotate="auto"    begin="1s"     dur="1.6s"   repeatCount="1"   fill="freeze"   >     <mpath xlinkHref="#Path-1" />  </animateMotion>   </polyline>   </g>  </svg>';
function Arrow() {
  return (
    <>
      <div
        className="graph__wrapper"
        dangerouslySetInnerHTML={{ __html: svg }}
      ></div>
      <iframe
        className="ifrm"
        src="https://cpdesigner.net/ko-fi/buy-me-a-coffee.php"
      ></iframe>
    </>
  );
}

export default Arrow;
