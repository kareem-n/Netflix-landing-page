import React, { useEffect } from "react";
import tv from "./tv.png";
import vid from "./video-tv-0819.mp4";
import vid2 from "./video-devices.mp4";
import mobile from "./mobile-0819.jpg";
import shot from "./boxshot.png";
import animation from "./download-icon.gif";
import tv2 from "./device-pile.png";
import kids from "./kids.png";

import $ from "jquery";

export default function Home() {

  function emailSubmit(){
    console.log(this);
  }

  function toggle() {
    $(".title").on("click", function () {
      $(this).parent().toggleClass("active");
      $(this).parent().siblings().removeClass("active");
    });
  }

  useEffect(() => {
    toggle();
  }, []);

  return (
    <>
      <header className="hero">
        <div className="top-bar pt-4 pt-1 position-relative">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="logo">
              <svg viewBox="0 0 111 30" className="svg-icon-netflix-logo">
                <g>
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </div>
            <div className="">
              <select
                className="me-2 me-md-4 btn btn-dark border border-1"
                name=""
                id=""
              >
                <option value="">english</option>
                <option value="">عربي</option>
              </select>

              <a className="signinBtn btn btn-sm-sm px-md-3">Sign in</a>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="inner">
            <h1 className="main-title mb-md-3">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3 className="mt-4 mb-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="form-floating text-black">
              <input
                required
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
              <button type="submit" onClick={()=>{emailSubmit()} }className="btn ">
                Get Started
                <i className="fa-solid ms-1 ms-md-3 fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="brd-bottom"></div>
      </header>

      <section className="position-relative">
        <div className="container p-md-5 py-5 py-md-2">
          <div className="row px-md-5 px-3 align-items-center">
            <div className="col-lg-6">
              <div className="text-center text-md-start">
                <h2 className="h1 mb-4 fw-bold">Enjoy on your TV.</h2>
                <h4 className="px-2 px-md-0">
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </h4>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <img src={tv} className="w-100" alt="" />
              <div className="vid-stamp position-absolute">
                <video autoPlay muted loop width="100%" height="100%">
                  <source src={vid} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="brd-bottom"></div>
      </section>

      <section className="">
        <div className="container p-md-5 py-5 py-md-2">
          <div className="row px-md-5 px-3 align-items-center">
            <div className="col-lg-6 order-1 order-lg-0 position-relative">
              <img src={mobile} className="w-100" alt="" />
              <div className="py-2 box-shot position-absolute">
                <div className="">
                  <img src={shot} className="" alt="" />
                </div>
                <div className="p-3">
                  <p className="m-0 p-0">Stranger Things</p>
                  <p className="m-0 p-0 download">Downloading...</p>
                </div>
                <div className="ms-auto">
                  <img src={animation} className="" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1">
              <div className="text-center text-md-start">
                <h2 className="h1 mb-4 fw-bold">
                  Download your shows <br />
                  to watch offline.
                </h2>
                <h3 className="px-3 px-md-0">
                  Save your favorites easily and always have something to watch.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="brd-bottom"></div>
      </section>

      <section className="">
        <div className="container p-md-5 py-5 py-md-2">
          <div className="row px-md-5 px-3 align-items-center">
            <div className="col-lg-6">
              <div className="text-center text-md-start">
                <h2 className="h1 mb-4 fw-bold">Watch everywhere.</h2>
                <h3 className="mb-5 mb-md-0 px-2 px-md-0">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV without paying more.
                </h3>
              </div>
            </div>
            <div className="col-lg-6 position-relative overflow-hidden">
              <img src={tv2} className="w-100" alt="" />
              <div className="position-absolute vid2-stamp">
                <video width="100%" height="100%" autoPlay loop muted>
                  <source src={vid2} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="brd-bottom"></div>
      </section>

      <section className="">
        <div className="container p-md-5 py-5 py-md-2">
          <div className="row  px-md-5 px-3 align-items-center">
            <div className="col-lg-6 order-1 order-md-0 position-relative overflow-hidden">
              <img src={kids} className="w-100" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="text-center text-md-start">
                <h2 className="h1 mb-4 fw-bold">Create profiles for kids.</h2>
                <h3 className="">
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="brd-bottom"></div>
      </section>

      <section className="ques py-5 position-relative">
        <div className="container">
          <h2 className="m-0 text-center">Frequently Asked Questions</h2>
          <ul className="list-unstyled">
            <li className="toggle">
              <div className="d-flex title position-relative justify-content-between align-items-center">
                <h2 className="m-0 ">what is Netflix?</h2>
                <i className="fas fa-2x fa-plus"></i>
              </div>
              <div className="answer">
                <h4 className="m-0">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices. <br />
                  <br /> You can watch as much as you want, whenever you want
                  without a single commercial – all for one low monthly price.
                  There's always something new to discover and new TV shows and
                  movies are added every week!
                </h4>
              </div>
            </li>

            <li className="toggle">
              <div className="d-flex title position-relative justify-content-between align-items-center">
                <h2 className="m-0">How much does Netflix cost?</h2>
                <i className="fas fa-2x fa-plus"></i>
              </div>
              <div className="answer">
                <h4>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from EGP120 to EGP200 a month. No extra costs, no contracts.
                </h4>
              </div>
            </li>

            <li className="toggle">
              <div className="d-flex title position-relative justify-content-between align-items-center">
                <h2 className="m-0">Where can i watch?</h2>
                <i className="fas fa-2x fa-plus"></i>
              </div>
              <div className="answer">
                <h4 className="m-0">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. <br /> <br /> You
                  can also download your favorite shows with the iOS, Android,
                  or Windows 10 app. Use downloads to watch while you're on the
                  go and without an internet connection. Take Netflix with you
                  anywhere.
                </h4>
              </div>
            </li>

            <li className="toggle">
              <div className="d-flex title position-relative justify-content-between align-items-center">
                <h2 className="m-0">How do i cancel?</h2>
                <i className="fas fa-2x fa-plus"></i>
              </div>
              <div className="answer">
                <h4>
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </h4>
              </div>
            </li>

            <li className="toggle">
              <div className="d-flex title position-relative justify-content-between align-items-center">
                <h2 className="m-0">What can i watch on Netflix</h2>
                <i className="fas fa-2x fa-plus"></i>
              </div>
              <div className="answer">
                <h4 className="m-0">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </h4>
              </div>
            </li>

            <li className="toggle">
              <div className="d-flex title position-relative justify-content-between align-items-center">
                <h2 className="m-0">Is netflix good for kids</h2>
                <i className="fas fa-2x fa-plus"></i>
              </div>
              <div className="answer">
                <h4>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </h4>
              </div>
            </li>

            <div className="mt-5">
              <p className="lead m-0 text-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="form-floating mt-3 text-black">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  defaultValue="name@example.com"
                />

                <label htmlFor="floatingInput">Email address</label>
                <button className="btn">
                  Get Started
                  <i className="fa-solid ms-3 fa-angle-right"></i>
                </button>
              </div>
            </div>
          </ul>
        </div>
        <div className="brd-bottom"></div>
      </section>

      <footer className="py-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <button className="d-block mb-3">Questions? Contact us.</button>
            </div>
            <div className="col-6 col-lg-3 ">
              <ul className="list-unstyled">
                <li>
                  <span>FAQ</span>{" "}
                </li>
                <li>
                  <span>Investor Relations</span>
                </li>
                <li>
                  <span>Privacy</span>{" "}
                </li>
                <li>
                  <span>Speed Test</span>{" "}
                </li>
              </ul>
              <select
                name=""
                className="btn text-white px-3 py-2 border-dark border-2"
                id=""
              >
                <option className="text-black" value="">
                  Arabic
                </option>
                <option className="text-black" value="">
                  English
                </option>
              </select>

              <p className="mt-3 m-0">Netflix Egypt</p>
            </div>
            <div className="col-6 col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <span>Help Center</span>{" "}
                </li>
                <li>
                  <span>Jops</span>
                </li>
                <li>
                  <span>Cookie Preferences</span>{" "}
                </li>
                <li>
                  <span>Legal notices</span>{" "}
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <span>Account</span>{" "}
                </li>
                <li>
                  <span>Ways to watch</span>
                </li>
                <li>
                  <span>Corporate Information</span>{" "}
                </li>
                <li>
                  <span>Only on Netflix</span>{" "}
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <ul className="list-unstyled">
                <li>
                  <span>Media Center</span>{" "}
                </li>
                <li>
                  <span>Terms of use</span>
                </li>
                <li>
                  <span>Privacy</span>{" "}
                </li>
                <li>
                  <span>Contact us</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
