import { Box, Button, Text } from "@chakra-ui/react";
import Recomandation from "../PopOver/Recomandation";

import imgsearch from "../icons/imgs.png";
import search from "../icons/search.png";
import React from "react";
import { useState } from "react";
import { natur } from "../Api";
import "../App.css";

const Nature = () => {
  const text = "Nature";
  const [model, setModel] = useState(false);

  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgsrc) => {
    setTempImgSrc(imgsrc);
    setModel(true);
  };

  return (
    <>
      <Box
        pos="relative"
        h="600px"
        bg="rgba(255,0,0,0.1)"
        bgImage="url(https://images.unsplash.com/photo-1637243175600-39d3f62dad04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
        bgSize="cover"
        // bgSize="cover"
        // pos="absolute",
        top="0"
        right="0"
        left="0"
        bottom="0"
      >
        <Box textAlign="left" paddingTop="200px" paddingLeft="200px">
          <Text color="white" fontSize="50px" fontWeight="bold">
            {text}
          </Text>
          <Text color="white" fontSize="20px">
            Let’s celebrate the magic of Mother Earth — <br /> with images of
            everything our planet has to offer, <br /> from stunning seascapes,
            starry skies, and everything in between.
          </Text>

          <br />
          <br />
          <br />

          <Button>
            Submit to &nbsp;<p fontSize="30px">{text}</p>
          </Button>
        </Box>
      </Box>
      <br />
      <br />

      {/* ////////////////////////////// */}

      <div style={{ width: "90%", margin: "auto" }}>
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} />
          <i
            onClick={() => setModel(false)}
            style={{ backgroundColor: "white", color: "black" }}
            class="fa-solid fa-xmark-large"
          ></i>
        </div>

        <div className="gallery">
          {natur.map((item, index) => {
            return (
              <div className="pics" key={index}>
                <img
                  src={item.imgsrc}
                  style={{ width: "100%" }}
                  onClick={() => getImg(item.imgsrc)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nature;
