import React from "react";
import { useProfileListQuery } from "../store/meApi";
import { Typography } from "@mui/material";

export const ProfileDisplay: React.FC = () => {
  const { data: profiles, isLoading } = useProfileListQuery();
  return (
    <>
      {isLoading || !profiles ? (
        <span>Loading profiles... </span>
      ) : (
        profiles?.forEach((profile) => {
          return (
            <>
              <Typography>Name: {profile.name}</Typography>
              <Typography>Age: {profile.age}</Typography>
              <br />
            </>
          );
        })
      )}
      ;
    </>
  );
};
