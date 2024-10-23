import React from "react";
import PreventDefaultWrapper from "~/lib/PreventDefaultWrapper";

const LoadingPage = () => {
  return (
    <PreventDefaultWrapper noOverflow>
      <div className="relative grid content-between h-screen">
        <img
          src="../../loaderBg.png"
          alt=""
          className="absolute object-cover w-screen -z-10"
        />
        <img
          src="../../loaderMonster.png"
          alt=""
          className="absolute right-0 top-20"
        />

        <div className="w-[150vw] absolute flex justify-center -left-[calc(75vw-50%)] -z-10 top-64">
          <div className="relative flex items-center justify-center w-full h-full">
            <img
              src="../../funnel.png"
              alt=""
              className="absolute object-cover w-full -z-10 animate-spin "
              style={{
                animationDuration: "30s",
              }}
            />
          </div>
        </div>

        <div className="fixed bottom-0 z-20 w-full bg-gradient-to-t from-darkBg via-[#360168]/[28%] to-[#3D0175]/10 h-[264px] via-[21%]"></div>
        <div className="fixed bottom-0 z-20 w-full bg-gradient-to-t from-darkBg to-[#3D0175]/0 h-[361px]"></div>
        <div className="fixed bottom-0 z-20 w-full bg-gradient-to-t from-darkBg to-[#3D0175]/0 h-[330px]"></div>
        <div className="fixed bottom-0 z-20 w-full bg-gradient-to-t from-darkBg to-[#3D0175]/0 h-[361px]"></div>

        <div className="flex justify-center h-full pt-8">
          <img
            src="../../monsterLogo.png"
            alt=""
            className="h-[55px] z-30 w-[200px]"
          />
        </div>
        <div className="z-30 grid pb-12 space-y-12 justify-items-center">
          <div className="space-y-6 ">
            <div className="text-2xl font-bold text-center">
              MONSTERRR TOKEN
            </div>
            <div className="text-sm max-w-[300px] text-center">
              Upgrade your monster, earn $RRR token by farming and completing
              easy tasks.
            </div>
          </div>
          <div className="flex items-center justify-center w-full space-x-3">
            <div className="">
              <a href="https://t.me/monsterrr_game" target="_blank">
                <img src="../../telegramIcon.png" alt="" className="size-11" />
              </a>
            </div>
            <div className="">
              <a href="https://t.me/monsterrr_chat_eng" target="_blank">
                <img
                  src="../../telegramEqualIcon.png"
                  alt=""
                  className="size-11"
                />
              </a>
            </div>
            <div className="">
              <a href="https://t.me/monsterrr_chat" target="_blank">
                <img
                  src="../../telegramRuIcon.png"
                  alt=""
                  className="size-11"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/channel/UCPUeabAvd0BCGui953jATew"
                target="_blank"
              >
                <img src="../../xIcon.png" alt="" className="size-11" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PreventDefaultWrapper>
  );
};

export default LoadingPage;
