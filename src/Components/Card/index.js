import React, { useState } from "react";
import { CardDiv, List, TextSpan, InputDiv } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeading, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import Text from "../Text";
import Heading from "../Heading";

export default function Card() {
  const [isButtonOn, setButton] = useState(false);
  const [isTextOn, setText] = useState(false);
  const [isHeadingOn, setHeading] = useState(false);
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(true);
  const buttonShow = () => setButton(true);
  const TextShow = () => setText(true);
  const HeadingShow = () => setHeading(true);
  return (
    <>
      <InputDiv onClick={toggle}>
        {!isToggledOn ? "Click to show options" : null}
        {isButtonOn ? <Button /> : null}
        {isTextOn ? <Text /> : null}
        {isHeadingOn ? <Heading /> : null}
      </InputDiv>
      {isToggledOn ? (
        <CardDiv>
          <List>
            <FontAwesomeIcon icon={faHeading} />
            <TextSpan onClick={TextShow}> Text </TextSpan>
          </List>
          <List>
            <FontAwesomeIcon icon={faHeading} />
            <TextSpan onClick={HeadingShow}> Heading 1 </TextSpan>
          </List>
          <List>
            <FontAwesomeIcon icon={faRectangleList} />
            <TextSpan onClick={buttonShow}> Button </TextSpan>
          </List>
        </CardDiv>
      ) : null}
    </>
  );
}
