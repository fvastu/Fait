import { Link } from "@chakra-ui/react";
import React from "react";
import { readColorFromTheme } from "../../shared/read-from-theme";
import { AppleAppStore, GooglePlayStore } from "./assets-wrapper";
import { toRem } from "../../shared/utils";

const GOOGLE_PLAY_STORE_URL = "https://play.google.com/store";
const APPLE_STORE_URL = "https://www.apple.com/app-store/";

export interface StoreButtonProps {
  storeType: "Google" | "Apple";
}

export const StoreButton = ({ storeType }: StoreButtonProps) => {
  const accentColor = readColorFromTheme("accent").default;
  const storeUrl =
    storeType === "Google"
      ? GOOGLE_PLAY_STORE_URL
      : APPLE_STORE_URL

  return (
    <Link
      href={storeUrl}
      background={"transparent"}
      w={toRem(160)}
      padding={"0.5rem 1rem"}
      borderColor={"white"}
      borderStyle={"solid"}
      borderWidth={toRem(1)}
      borderRadius={toRem(8)}
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        bg: accentColor,
      }}
    >
      {storeType === "Google" ? (
        <GooglePlayStore h="full" />
      ) : (
        <AppleAppStore h="full" />
      )}
    </Link>
  );
};
