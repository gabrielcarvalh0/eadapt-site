import React from "react";

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.0851765995662!2d-49.96152592471047!3d-22.19886907975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd7fdcad8f845%3A0xee1f03570326520a!2sAg%C3%AAncia%20E-Adapt!5e0!3m2!1sen!2sbr!4v1730689080203!5m2!1sen!2sbr"
        ></iframe>
    </div>
  );
}

export default Map;
