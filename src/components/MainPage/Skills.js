import React from 'react'

export default function Skills() {
    const slides = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png",
        "http://i.cloudup.com/zfY6lL7eFa-3000x3000.png",
        "https://www.seekpng.com/png/full/142-1424663_bootstrap-stickers-bootstrap-logo-transparent.png",
        "https://img.icons8.com/color/480/000000/git.png",
        "https://img.icons8.com/ios-filled/50/000000/github.png",
        "https://img.icons8.com/color/480/000000/css3.png",
        "https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg",
        "https://img.icons8.com/color/480/000000/postgreesql.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9Y_hsyTH32-gVSaTWwZuttmiHIi612T9Rg&usqp=CAU",
      ];
  return (
    <div className="container pt-5">
          <h1>.skill</h1>
          <div className="skill">
            <div className="row">
              <div className="col skillpadding ">
                <section>
                  <h4 className="center">Front-End</h4>
                  <div className="icon ">
                    <div className="block">
                      <div className="card skillsCard">
                        <img src={slides[1]} className="iconsize" alt="" />
                      </div>
                      <h3>React.Js</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        
                          <img src={slides[0]} className="iconsize" alt="" />
                        
                      </div>
                      <h3>HTML 5</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        <img src={slides[4]} className="iconsize" alt="" />
                      </div>
                      <h3>Bootstrap</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        <img src={slides[7]} className="iconsize" alt="" />
                      </div>
                      <h3>CSS</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        <img src={slides[8]} className="iconsize" alt="" />
                      </div>
                      <h3>Tailwind </h3>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col">
                <section>
                  <h4 className="center">Back-End</h4>
                  <div className="icon">
                    <div className="block">
                      <div className="card skillsCard">
                        <img src={slides[2]} className="iconsize" alt="" />
                      </div>
                      <h3>Node.Js</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        
                          <img src={slides[3]} className="iconsize" alt="" />
                        
                      </div>
                      <h3>Express</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        <img src={slides[9]} className="iconsize" alt="" />
                      </div>
                      <h3>Postgres</h3>
                    </div>
                    <div className="p-2">
                      <div className="card skillsCard">
                        <img src={slides[10]} className="iconsize" alt="" />
                      </div>
                      <h3>REST API</h3>
                    </div>
                   
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
  )
}
