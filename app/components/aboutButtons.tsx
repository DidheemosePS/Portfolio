"use client";

import React, { useEffect, useState } from "react";
import { login, logOut } from "../../redux/features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Head from "next/head";
export default function AboutButtons({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const childComponents = React.Children.toArray(children);

  const [isOpen, setIsOpen] = useState<number>(0);

  const style1 = "border-b-2 border-transparent";

  const style2: string = "border-b-2 border-red-#ff044c";

  const [skillsStyle, setSkillsStyle] = useState<string>(style2);

  const [experienceStyle, setExperienceStyle] = useState<string>(style1);

  const [educationStyle, setEducationStyle] = useState<string>(style1);

  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth.value);

  useEffect(() => {
    const test = dispatch(login("hi"));
    console.log(test);
  }, []);

  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="flex gap-12">
        <button
          className={skillsStyle}
          onClick={() => {
            setIsOpen(0);
            setSkillsStyle(style2);
            setExperienceStyle(style1);
            setEducationStyle(style1);
          }}
        >
          Skills
        </button>
        <button
          className={experienceStyle}
          onClick={() => {
            setIsOpen(1);
            setSkillsStyle(style1);
            setExperienceStyle(style2);
            setEducationStyle(style1);
          }}
        >
          Exprience
        </button>
        <button
          className={educationStyle}
          onClick={() => {
            setIsOpen(2);
            setSkillsStyle(style1);
            setExperienceStyle(style1);
            setEducationStyle(style2);
          }}
        >
          Education
        </button>
      </div>
      {isOpen === 0 && childComponents[0]}
      {isOpen === 1 && childComponents[1]}
      {isOpen === 2 && childComponents[2]}
    </>
  );
}
