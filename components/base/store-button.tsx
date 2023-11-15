import { Link } from "@chakra-ui/react";
import React from "react";
import { readColorFromTheme } from "../../shared/read-from-theme";
import { AppleAppStore, GooglePlayStore } from "./assets-wrapper";

interface StoreButtonProps {
  type: "Google" | "Apple";
}

export const StoreButton: React.FC<StoreButtonProps> = ({ type }) => {
  const accentColor = readColorFromTheme("accent").default;
  console.log("accentColor");
  const storeUrl =
    type === "Google"
      ? "https://play.google.com/store"
      : "https://www.apple.com/app-store/";

  return (
    <Link
      href={storeUrl}
      background={"transparent"}
      w="160px"
      padding={"0.5rem 1rem"}
      borderColor={"white"}
      borderStyle={"solid"}
      borderWidth={"1px"}
      borderRadius={"8px"}
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
