import React from "react";
import grub from "../../img/Capturegubbash.jpg";
import movie from "../../img/we-love-movies-snapshot.jpg";
import flash from "../../img/Captureflashcard.jpg";
import resporject from "../../img/resapp.PNG";

import "./MainPage.css";

import { motion,} from "framer-motion";
import Skills from "./Skills";

export default function MainPage() {
  

  return (
    <>
      <motion.div
        animate={{ y: -100 }}
        transition={{ ease: "easeOut", duration: 1 }}
        
      >
        <div className="container padding ">
          <div className="col">
            <h1>.about</h1>
            <p className="text-start selector backgroundColorForP ">
              Hey there , Im Dustin a software developer out of las vegas with a
              passion for solving problems and who loves to create apps that are
              fun and practical. I strive to create clean easy-to-read code as
              much as possible. I’ve always sought out opportunities and
              challenges that are meaningful to me. As a developer, I enjoy
              using my obsessive attention to detail, my unequivocal love for
              making things, and my mission-driven work ethic to literally
              change the world.{" "}
            </p>
          </div>
        </div>

        <Skills />

        <div className="container pt-5 ">
          <h1 id="portfolio">.portfolio</h1>
          <motion.div
            className="card por-card"
            whileHover={{
              scale: 1.5,

              zIndex: 2,
            }}
          >
            <a
              href="https://capstone-project-frontend-pink.vercel.app/dashboard"
              className="shapeLink"
              target="_blank"
              rel="noreferrer"
            >
              <img src={resporject} alt="reservationApp"/>
            </a>
            <div className="card-body">
              <h4 className="card-title center">Reservation App</h4>

              <p className="card-text">
                Full-stack project for an internal reservation system for a
                restaurant.
              </p>
              <p>
                <b>Tech Used:</b> React.js, Express.js , Knex.js , PostgreSQL
              </p>
            </div>
          </motion.div>
          <div className="pt-5">
            <motion.div
              className="card por-card "
              whileHover={{
                scale: 1.5,
                zIndex: 2,
              }}
            >
              <a
                href="https://github.com/nolaxking/Flashcards-App"
                className="shapeLink"
                target="_blank"
                rel="noreferrer"
              >
                <img src={flash} alt="flashcardapp" />
              </a>

              <div className="card-body">
                <h4 className="card-title center">FlashCard App</h4>
                <p className="card-text">
                  Flash Card app that let you create a deck of flashcards used
                  for studying.
                </p>
                <p>
                  <b>Tech Used:</b> React.js , Css , Json server , Bootstrap{" "}
                </p>
              </div>
            </motion.div>
          </div>
          <div className="pt-5">
            <motion.div
              className="card por-card"
              whileHover={{
                scale: 1.5,

                zIndex: 2,
              }}
            >
              <a
                href="https://movies-we-love.netlify.app/"
                className="shapeLink"
                target="_blank"
                rel="noreferrer"
              >
                <img src={movie} alt="a"/>
              </a>

              <div className="card-body">
                <h4 className="card-title center">We Love Movies</h4>

                <p className="card-text">Movie showtime app the show what movies are playing at certain theater.</p>
                <p>
                  <b>Tech Used:</b> React.js, Express.js , Knex.js , PostgreSQL
                </p>
              </div>
            </motion.div>
          </div>
          <div className="pt-5">
            <motion.div
              className="card por-card"
              whileHover={{
                scale: 1.5,

                zIndex: 2,
              }}
            >
              <a
                href="https://grub-bash.netlify.app/"
                className="shapeLink"
                target="_blank"
                rel="noreferrer"
              >
                <img src={grub} alt="a" />
              </a>

              <div className="card-body">
                <h4 className="card-title center">GrubDash</h4>

                <p className="card-text">
                  Simple restaurant delivery app that allow you to order food and get it delivered.
                </p>
                <p>
                  <b>Tech Used:</b> React.js , Css ,Bootstrap{" "}
                </p>
              </div>
            </motion.div>
          </div>
          <div className="container">
            <footer className="my-4  py-2 d-border-top align"></footer>
          </div>
        </div>
      </motion.div>
    </>
  );
}
