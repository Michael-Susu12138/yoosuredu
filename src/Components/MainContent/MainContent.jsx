import React from "react";
import "./MainContent.css";
import PatisserieComponent from "../PatisserieComponent/PatisserieComponent";
import Slideshow from "../Slideshow/Slideshow";
import News from "../News/News";
import Gallery from "../Gallery/Gallery";
import Channel from "../Channel/Channel";

// import * as THREE from "three"; // Import Three.js

const MainContent = () => {
  //   const vantaRef = useRef(null);

  //   useEffect(() => {
  //     const loadVanta = async () => {
  //       const VANTA = await import("vanta/dist/vanta.clouds.min"); // Dynamically import Vanta.js plugin

  //       const vantaEffect = VANTA.CLOUDS({
  //         el: vantaRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         THREE: THREE, // Pass the imported Three.js instance
  //       });

  //       return () => {
  //         if (vantaEffect) vantaEffect.destroy();
  //       };
  //     };

  //     loadVanta();
  //   }, []);
  return (
    <>
      <div className="hero">
        <h1 className="playwrite-ar-uniquehero">
          We are here to help you build a bright future
        </h1>
      </div>

      <nav>
        <div className="logo">Yoosuredu</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Stuff</li>
        </ul>
      </nav>

      <main>
        <Slideshow></Slideshow>
        <div className="patisserie-section">
          <PatisserieComponent />
          <div className="patisserie-description">
            <h2>Meet our Team</h2>
            <p>
              At Yoosuredu, all of our teachers are coming from prestigous
              university around the work.
            </p>

            <button className="button-62" role="button">
              Learn More
            </button>
          </div>
        </div>

        <Channel />

        <Gallery />
        {/* 
        <h2>Dolor Sit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
          semper eget duis at tellus at urna...
        </p>
        <p>
          Lobortis feugiat vivamus at augue eget. Eu ultrices vitae auctor eu
          augue ut lectus arcu...
        </p>
        <p className="reveal">
          Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
          ullamcorper... Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Purus semper eget duis at tellus at urna. Eget sit amet tellus
          cras adipiscing enim eu. Diam vel quam elementum pulvinar. Condimentum
          lacinia quis vel eros donec ac odio tempor orci. Amet est placerat in
          egestas erat imperdiet. Enim nunc faucibus a pellentesque sit amet
          porttitor eget dolor. Vitae congue eu consequat ac felis donec.
          Egestas maecenas pharetra convallis posuere morbi leo urna. Mattis
          ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Ornare
          aenean euismod elementum nisi quis. Netus et malesuada fames ac
          turpis. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Eu
          scelerisque felis imperdiet proin fermentum. Amet purus gravida quis
          blandit turpis cursus in hac habitasse. Lobortis feugiat vivamus at
          augue eget. Eu ultrices vitae auctor eu augue ut lectus arcu.
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
          Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
          Id diam maecenas ultricies mi. Amet nulla facilisi morbi tempus
          iaculis urna. Neque convallis a cras semper auctor. Odio eu feugiat
          pretium nibh. Blandit massa enim nec dui. Tortor at risus viverra
          adipiscing. Gravida quis blandit turpis cursus in hac habitasse
          platea. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
          ullamcorper. Cursus risus at ultrices mi tempus. Urna cursus eget nunc
          scelerisque viverra mauris. Curabitur vitae nunc sed velit dignissim
          sodales ut eu sem. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Massa sapien faucibus et molestie ac feugiat sed lectus.
          Tincidunt dui ut ornare lectus. Interdum consectetur libero id
          faucibus nisl. Fermentum odio eu feugiat pretium nibh ipsum. Maecenas
          ultricies mi eget mauris. Cursus risus at ultrices mi tempus
          imperdiet. Convallis posuere morbi leo urna molestie at elementum eu.
          Non enim praesent elementum facilisis leo vel. Lectus sit amet est
          placerat in egestas erat imperdiet sed. Nunc congue nisi vitae
          suscipit tellus mauris a diam maecenas. Cursus mattis molestie a
          iaculis at erat. Lorem Ipsum Feugiat in ante metus dictum at tempor
          commodo ullamcorper a. Feugiat nibh sed pulvinar proin gravida
          hendrerit lectus a. Elit eget gravida cum sociis natoque penatibus et
          magnis dis. Eget mauris pharetra et ultrices neque ornare aenean.
          Tempor nec feugiat nisl pretium. Neque viverra justo nec ultrices dui
          sapien eget mi. Gravida dictum fusce ut placerat orci nulla
          pellentesque dignissim enim. Egestas purus viverra accumsan in nisl.
          Ultrices sagittis orci a scelerisque purus semper eget. Eget egestas
          purus viverra accumsan in nisl nisi scelerisque eu. Purus ut faucibus
          pulvinar elementum integer enim neque volutpat. Mi ipsum faucibus
          vitae aliquet nec ullamcorper sit. Luctus accumsan tortor posuere ac
          ut. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
          Malesuada pellentesque elit eget gravida. Viverra aliquet eget sit
          amet. Augue lacus viverra vitae congue eu consequat. Dignissim enim
          sit amet venenatis urna cursus eget nunc scelerisque. Ut tortor
          pretium viverra suspendisse potenti nullam ac tortor. Amet dictum sit
          amet justo donec enim diam. Tristique nulla aliquet enim tortor at
          auctor urna nunc id. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. Pharetra convallis posuere morbi
          leo. Eget arcu dictum varius duis at consectetur lorem. Dignissim
          convallis aenean et tortor at. Quis hendrerit dolor magna eget est
          lorem ipsum. A arcu cursus vitae congue mauris. Pellentesque habitant
          morbi tristique senectus et netus et malesuada. Augue ut lectus arcu
          bibendum. Lectus mauris ultrices eros in cursus turpis massa
          tincidunt. Libero justo laoreet sit amet cursus sit. Tristique et
          egestas quis ipsum suspendisse ultrices gravida.
        </p>

        <h2>Lorem Ipsum</h2>
        <p>Feugiat in ante metus dictum at tempor commodo ullamcorper a...</p>
        <p>
          Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque...
        </p> */}

        <News />
      </main>
    </>
  );
};

export default MainContent;
