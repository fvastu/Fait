import { Link } from "@chakra-ui/react";
import React from "react";
import { readColorFromTheme } from "../../shared/read-from-theme";
import { AppleAppStore, GooglePlayStore } from "./assets-wrapper";
import { toRem } from "../../shared/utils";

interface StoreButtonProps {
  type: "Google" | "Apple";
}

export const StoreButton: React.FC<StoreButtonProps> = ({ type }) => {
  const accentColor = readColorFromTheme("accent").default;
  const storeUrl =
    type === "Google"
      ? "https://play.google.com/store"
      : "https://www.apple.com/app-store/";

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
      {type === "Google" ? (
        <GooglePlayStore h="full" />
      ) : (
        <AppleAppStore h="full" />
      )}
    </Link>
  );
};
