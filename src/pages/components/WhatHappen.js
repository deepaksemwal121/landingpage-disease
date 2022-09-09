import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";

const WhatHappen = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };
  return (
    <div className="px-16 py-8 md:px-32 md:py-16 bg-gray-100 space-x-12 w-full md:flex">
      <div className="md:w-1/2">
        <h1 className=" text-[40px] md:text-[50px]">What happens during CABG?</h1>
        <p className="text-lg mb-4">
          CABG usually lasts for 3-6 hours. But it may take longer depending on
          how many blood vessels are being attached.
        </p>
        <p>
          Here’s what you can expect during the surgery-
          <ol>
            <li>
              1. Blood vessels can be taken from your leg, inside your chest, or
              your arm. One of the graft vessels is usually taken from your
              chest.
            </li>
            <li>
              {" "}
              2. Once all the graft vessels have been removed, your surgeon will
              make a cut down the middle of your chest so they can divide your
              breastbone (sternum) and access your heart.{" "}
            </li>
            <li>
              3. During the procedure, your blood may be rerouted to a
              heart-lung bypass machine.
            </li>
            <li>
              4. After the grafts have been attached, your heart will be started
              again using controlled electrical shocks.
            </li>
            <li>
              {" "}
              5. Your breastbone will then be fixed together using permanent
              metal wires and the skin on your chest sewn up using dissolvable
              stitches
            </li>
          </ol>
        </p>
      </div>
      <div className="flex w-[200px] md:w-1/2 justify-center items-center video__placeholder">
        <AiOutlinePlayCircle onClick={openModal} size={100} color="orange" />
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={() => setModal(!modal)}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    width="560"
                    height="315"
                    onLoad={spinner}
                    src="https://www.youtube.com/embed/3Nf6Q2skGOM"
                    title="Coronary Artery Bypass Graft"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default WhatHappen;
