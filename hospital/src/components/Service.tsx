import React from "react";


interface Props {
  bgColor: string;
  icon: React.ReactNode;
  text: string;
  desColor:String;
  iconColor:String
}
const Service = ({ bgColor, icon, text,desColor,iconColor }: Props) => {
  return (
    <div
      className={`${bgColor} h-40 w-44 rounded-xl flex justify-center items-center shadow-lg`}
    >
      <div className={`${desColor} flex flex-col items-center text-sm text-center font-semibold`}>
        <div className={`mb-4 ${iconColor}`} style={{ fontSize: "42px" }}>
          {icon}
        </div>
        {text}
      </div>
    </div>
  );
};

export default Service;
