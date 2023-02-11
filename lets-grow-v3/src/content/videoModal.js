import React, { useState, useRef, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import promoVideo from "../videos/promo.mp4";
import videoPoster from "../images/promoVideo.jpg";
import Button from "../components/tachyons/buttons";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleClose = e => {
    e.preventDefault();
    setIsOpen(false);
  };
  const videoRef = useRef(null);
  const playVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  useEffect(() => {
    // on load, check local storage to set whether modal should show
    const hideModal = window.localStorage.getItem("letsGrowHideModal");
    // if it should show, open the modal
    if (!hideModal || hideModal === "false") {
      setIsOpen(true);
    }
  }, []);
  const setHideModal = bool => {
    window.localStorage.setItem("letsGrowHideModal", bool);
  };
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      style={{ outline: 0 }}
    >
      <Slide
        direction="up"
        timeout={400}
        in={isOpen}
        mountOnEnter
        unmountOnExit
      >
        <div
          className="bg-white-80 flex flex-column items-center content-center pa2"
          style={{
            position: "fixed",
            width: "90vw",
            left: "5vw",
            top: "5vh",
            outline: 0,
            borderRadius: "5px"
          }}
        >
          {!isPlaying && (
            <div
              className="z-max absolute w-90 flex items-center content-center"
              style={{ height: "80%" }}
            >
              <button
                className="f2 grow no-underline br-pill ba bw2 ph3 pv2 mb2 db purple bg-white hover-bg-white center mt5"
                style={{ outline: 0 }}
                onClick={playVideo}
              >
                Play
              </button>
            </div>
          )}

          <div
            className="db center ph2 pt2 pb1"
            style={{ width: "100%", maxWidth: "130vh" }}
          >
            <video
              poster={videoPoster}
              id="background-video"
              className="w-100"
              ref={videoRef}
            >
              <source src={promoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <form className="flex items-center content-center">
            <label className="db avenir f6 mr4">
              Don&apos;t show me this again
              <input
                className="ml2"
                type="checkbox"
                onChange={e => setHideModal(e.target.checked)}
              />
            </label>
            <Button
              as="input"
              type="submit"
              value="Close"
              className="mt2 bg-purple br-pill grow center"
              onClick={handleClose}
            />
          </form>
        </div>
      </Slide>
    </Modal>
  );
};

export default VideoModal;
