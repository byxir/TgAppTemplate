import { postEvent } from "@telegram-apps/sdk-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number | undefined): string | null {
  if (num === undefined) return null;
  const numStr = num.toFixed(0).toString();

  const formattedStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return formattedStr;
}

export function formatNumber2Decimals(num: number | undefined): string | null {
  if (num === undefined) return null;
  const numStr = num.toFixed(2).toString();

  const formattedStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return formattedStr;
}

export const executeHaptic = () => {
  //@ts-ignore
  if (window.TelegramWebviewProxy) {
    postEvent("web_app_trigger_haptic_feedback", {
      type: "impact",
      impact_style: "soft",
    });
  }
};

export const executeHapticBurst = () => {
  //@ts-ignore
  if (window.TelegramWebviewProxy) {
    let impactCount = 0;
    const totalImpacts = 30;
    const interval = 1000 / totalImpacts; // Spread 30 impacts over 1 second (1000ms)

    const impactInterval = setInterval(() => {
      if (impactCount >= totalImpacts) {
        clearInterval(impactInterval);
        return;
      }

      postEvent("web_app_trigger_haptic_feedback", {
        type: "impact",
        impact_style: "soft",
      });

      impactCount++;
    }, interval);
  }
};
