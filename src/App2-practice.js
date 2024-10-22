import { useState } from "react";
// import {
//   DotsThreeOutline,
//   DotsThreeOutlineVertical,
// } from "@phosphor-icons/react";

export default function App() {
  const logo =
    "https://www.nicepng.com/png/detail/79-793761_silent-hill-logo-copy-silent-hill-game-logo.png";

  const logoStyle = {
    marginBottom: "32px",
  };

  return (
    <div>
      <img src={logo} style={logoStyle} />

      <Expander
        id={"Harry Mason"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/harry_mason.png"
        }
      >
        As the main character, Harry is a widowed writer whose wife died four
        years ago from a disease, leaving him to take care of their now seven
        year old daughter, Cheryl. Harry has brown hair and brown eyes and is a
        kind and respectful man who loves his daughter. After Cheryl repeatedly
        begged him to take her to Silent Hill, he finally gave in, but a car
        crash while entering the town separated them. Heading into the foggy
        town, Harry is determined to do whatever he can to find and save his
        daughter.
      </Expander>

      <Expander
        id={"Cheryl Mason"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/cheryl_mason.png"
        }
      >
        The daughter of Harry Mason, Cheryl is a quiet, seven year old girl with
        short black hair and brown eyes. After the tragic loss of her mother at
        the age of three, her father Harry became her sole guardian. She began
        begging him to take her on a trip to the town of Silent Hill, to which
        he finally agreed. With Cheryl asleep in the passenger seat on the way
        into town during the night, a mysterious figure jumped in front of
        Harry's vehicle and sent them into a crash. After Harry gained
        consciousness in the morning, Cheryl was nowhere to be found.
      </Expander>

      <Expander
        id={"Cybil Bennett"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/cybil_bennet.png"
        }
      >
        As a police officer from the nearby town of Brahms, Cybil is Harry's
        first acquaintance in Silent Hill, finding him passed out in a cafe.
        Cybil has blonde hair and green eyes, and despite being a police officer
        with authority puts a lot of trust in Harry, offering her weapon after
        he explains his story. While Harry sets out to find Cheryl, Cybil
        decides to leave the town for reinforcements since all the phones and
        radios are out.
      </Expander>

      <Expander
        id={"Dahlia Gillespie"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/dahlia_gillespie.png"
        }
      >
        First summoning Harry to a church by ringing its bell, Dahlia is a crazy
        lady with brown hair, blue eyes, lots of eye shadow, and strange
        clothing. In each meeting she feeds Harry what certainly sounds like
        crazy talk to help him find his daughter, but she always leaves quickly
        without further explanation. As told by Lisa, Dahlia apparently lost her
        child in a fire and has been crazy ever since.
      </Expander>

      <Expander
        id={"Michael Kaufman"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/michael_kaufmann.png"
        }
      >
        First meeting Harry in the hospital and greeting him with a bullet,
        Kaufmann is a doctor that works at Alchemilla Hospital. He has brown
        hair, blue eyes and has an extremely rough and curt personality with a
        very short temper, not standing for goofing off or flapping his gums for
        too long. Despite his concern for what's going on in the town, he
        doesn't appear very interested in helping Harry but rather is more
        focused on his own affairs.
      </Expander>

      <Expander
        id={"Lisa Garland"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/lisa_garland.png"
        }
      >
        A young nurse who works at Alchemilla Hospital, Harry finds Lisa hiding
        under a table before she jumps to her feet and hugs him in relief as the
        first person she's seen in a while. Lisa has blonde hair and green eyes
        and is a very caring, friendly, and emotional young woman. She explains
        to Harry that she woke up all alone in the hospital in its current state
        after falling unconscious. As the only particularly friendly local,
        Harry relies on Lisa for key information about the town and anything
        that can help him on his journey.
      </Expander>

      <Expander
        id={"Alessa Gillespie"}
        pic={
          "https://www.silenthillmemories.net/sh1/characters/alessa_gillespie.png"
        }
      >
        A mysterious young girl, Alessa is the one who stepped in front of
        Harry's Jeep, causing the car crash that started this whole mess. Harry
        repeatedly spots her around town but she never sticks around long enough
        for Harry to speak with. Although nothing is certain, she may have
        something to do with the town's current state.
      </Expander>
    </div>
  );
}

function Expander({ children, id, pic, snippet = 10 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const textBoxStyle = {
    height: "350px",
    color: "#fff",
    borderRadius: "6px",
    lineHeight: "1.8",
    fontSize: "1rem",
    paddingRight: "20px",
  };

  const nameStyle = {
    color: "salmon",
    fontSize: "1.6rem",
    textTransform: "uppercase",
    paddingTop: "12px",
    marginBottom: "16px",
  };

  // const buttonStyle = {
  //   fontSize: "1rem",
  //   backgroundColor: "#a5f3fc",
  //   color: "#18181b",
  //   outline: "none",
  //   cursor: "pointer",
  //   padding: "4px",
  //   borderRadius: "6px",
  //   marginLeft: "12px",
  // };

  // const gameTitleStyle = {
  //   backgroundColor: "#4ade80",
  //   color: "#000",
  //   padding: "2px",
  //   borderRadius: "6px",
  //   textTransform: "uppercase",
  //   marginRight: "1rem",
  // };

  const picStyle = {
    borderRadius: "6px",
  };

  const charCardStyle = {
    width: "800px",
    backgroundColor: "#18181b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    borderRadius: "6px",
    marginBottom: "2rem",
    boxShadow: "0px 7px 29px 0px",
  };

  function handleExpand() {
    setIsExpanded(() => !isExpanded);
  }

  return (
    <div>
      <div style={charCardStyle}>
        <img src={pic} alt={id} height="350px" style={picStyle} />
        {/* <span style={gameTitleStyle}>Silent Hill</span> */}
        <div className="box" style={textBoxStyle}>
          <h2 style={nameStyle}>{id}</h2>
          <span>
            {children}
            {/* {isExpanded
            ? children
            : children.split(" ").slice(0, snippet).join(" ").concat(" ...")} */}
          </span>
          {/* <button style={buttonStyle} onClick={handleExpand}>
          {isExpanded ? "Less" : "More"}
          </button> */}
        </div>
      </div>
    </div>
  );
}
