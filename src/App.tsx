/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { postEvent } from "@telegram-apps/sdk-react";
import { Toaster } from "./components/ui/toaster";
import { routes } from "./routes";
import Wrapper from "./components/Wrapper";
import { isDesktop } from "react-device-detect";
import LoadingPage from "./components/LoadingPage";

import { useToast } from "./components/ui/use-toast";

import DesktopPage from "./pages/DesktopPage";

function App() {
  useEffect(() => {
    // @ts-ignore
    WebApp.expand();

    // @ts-ignore
    if (window.TelegramWebviewProxy) {
      postEvent("web_app_set_header_color", { color: "#FFFFFF" });
      postEvent("web_app_set_background_color", { color: "#FFFFFF" });
    }
  }, []);

  const [appHeight, setAppHeight] = useState(0);

  const { toast } = useToast();

  useEffect(() => {
    setTimeout(() => {
      setAppHeight(WebApp.viewportHeight);
      document.body.style.height = `${WebApp.viewportStableHeight}px`;
    }, 700);
    // @ts-ignore
  }, [window.Telegram.WebApp]);

  useEffect(() => {
    setAppHeight(WebApp.viewportHeight);
    document.body.style.height = `${WebApp.viewportHeight}px`;
    // @ts-ignore
  }, [window.Telegram.WebApp]);

  // const isAllLoaded = false

  // useEffect(() => {
  //   if (meData) setUser(meData);
  //   if (meData) setTempBalance(meData.info.balance);
  //   if (tasksData) setTasks(tasksData);
  //   if (referralData) setReferral(referralData);
  //   if (leaderboardFriendsData) setLeaderboardFriends(leaderboardFriendsData);
  //   if (leaderboardChestData) setLeaderboardChest(leaderboardChestData);
  //   if (leaderboardDuelData) setLeaderboardDuel(leaderboardDuelData);
  //   if (inventoryData) setInventory(inventoryData);
  //   if (paymentSystemInfoData) setPaymentSystemInfo(paymentSystemInfoData);
  //   if (duelInfoData) setArenaInfo(duelInfoData);
  //   if (fightInfoData) setFightInfo(fightInfoData);
  //   if (farmingTasksData) farmingTasks(farmingTasksData);
  // }, [
  //   meData,
  //   tasksData,
  //   referralData,
  //   leaderboardFriendsData,
  //   leaderboardChestData,
  //   leaderboardDuelData,
  //   inventoryData,
  //   paymentSystemInfoData,
  //   duelInfoData,
  //   fightInfoData,
  //   farmingTasksData,
  // ]);

  return (
    <div>
      {/* {!isAllLoaded ? (
      <LoadingPage />
      ) : ( */}
      <div
        className="relative overscroll-y-contain touch-none font-mon"
        style={{ height: `${appHeight}px` }}
      >
        <BrowserRouter>
          <Wrapper>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route path={path} key={index} element={element} />
              ))}
            </Routes>
          </Wrapper>
        </BrowserRouter>
        <Toaster />
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
