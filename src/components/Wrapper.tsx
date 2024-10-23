import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BackButton } from "@twa-dev/sdk/react";
import { executeHaptic } from "~/lib/utils";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const canGoBack = location.pathname !== "/";

  return (
    <div className="relative h-screen">
      {children}
      {canGoBack && <BackButton />}
      {/* <div className="w-full flex items-center rounded-t-[20px] bg-bg justify-evenly pt-4 pb-6 fixed bottom-0">
        <NavElement
          icon="home"
          title="RRR"
          ruTitle="RRR"
          link="/"
          active={location.pathname === "/"}
        />
        <NavElement
          icon="tasks"
          title="Tasks"
          ruTitle="Задания"
          link="/tasks"
          active={location.pathname === "/tasks"}
        />
        <NavElement
          icon="inventory"
          title="Inventory"
          ruTitle="Инвентарь"
          link="/inventory"
          active={location.pathname === "/inventory"}
        />
        <NavElement
          icon="friends"
          title="Friends"
          ruTitle="Друзья"
          link="/friends"
          active={location.pathname === "/friends"}
        />
        <NavElement
          icon="duel"
          title="Duel"
          ruTitle="Дуэль"
          link="/duel"
          active={location.pathname === "/duel"}
        />
        <NavElement
          icon="arena"
          title="Arena"
          ruTitle="Арена"
          link="/arena"
          active={location.pathname === "/arena"}
        />
      </div> */}
    </div>
  );
};

export default Wrapper;

// const NavElement = ({
//   icon,
//   title,
//   ruTitle,
//   link,
//   active,
// }: {
//   icon: string;
//   title: string;
//   ruTitle: string;
//   link: string;
//   active: boolean;
// }) => {
//   const determineIcon = () => {
//     switch (icon) {
//       case "home":
//         return <RRRIcon active={active} />;
//       case "tasks":
//         return <TasksIcon active={active} />;
//       case "inventory":
//         return <InventoryIcon active={active} />;
//       case "friends":
//         return <FriendsIcon active={active} />;
//       case "arena":
//         return <ArenaIcon active={active} />;
//       case "duel":
//         return <DuelIcon active={active} />;
//       case "wallet":
//         return <WalletIcon active={active} />;
//     }
//   };

//   // const canLink = link !== "/arena" && link !== "/duel";
//   const canLink = link !== "/arena";

//   return (
//     <div onClick={executeHaptic} className="">
//       {canLink ? (
//         <Link to={link}>
//           <div className="grid space-y-1 justify-items-center auto-rows-max">
//             <div className="size-[25px]">{determineIcon()}</div>
//             <div
//               className={`${active ? "text-pinkAccent" : "text-white"} text-[7px]`}
//             >
//               <Text en={title} ru={ruTitle} />
//             </div>
//           </div>
//         </Link>
//       ) : (
//         <div className="grid space-y-1 opacity-50 justify-items-center auto-rows-max">
//           <div className="size-[25px]">{determineIcon()}</div>
//           <div
//             className={`${active ? "text-pinkAccent" : "text-white"} text-[7px]`}
//           >
//             <Text en={title} ru={ruTitle} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
