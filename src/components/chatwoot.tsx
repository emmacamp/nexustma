"use client";

import { useEffect } from "react";

export default function Chatwoot() {
  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_EMBEBED_CHAT_DOMAIN;
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // @ts-expect-error @typescript-eslint/ban-ts-comment
      window.chatwootSDK.run({
        websiteToken: process.env.NEXT_PUBLIC_EMBEBED_CHAT_TOKEN,
        baseUrl: BASE_URL,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
