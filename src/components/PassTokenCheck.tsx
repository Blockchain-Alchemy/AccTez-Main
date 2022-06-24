import React, { useEffect, useState } from "react";
import moment from "moment";
import { Center, Loader } from "@mantine/core";
import { getTokenFullName, getTokenId } from "../utils";
import useDayPass from "../hooks/useDayPass";
import { DayPassToken } from "../config";

interface PassTokenCheckProps {
  token: string;
}

const center = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
} as any;

const PassTokenCheck = ({ token }: PassTokenCheckProps) => {
  const { getTokenTime } = useDayPass();
  const [loading, setLoading] = useState(true);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const tokenId = getTokenId(token);
    console.log("tokenId", tokenId);
    getTokenTime(tokenId)
      .then((expire: any) => {
        console.log("expire", expire);
        if (!expire) {
          setAccess(false);
        } else {
          console.log("check-1", moment().diff(expire, "day"));
          if (tokenId === DayPassToken.DayPass) {
            setAccess(moment().diff(expire, "day") < 1);
          } else if (tokenId === DayPassToken.WeeklyPass) {
            setAccess(moment().diff(expire, "day") < 7);
          } else if (tokenId === DayPassToken.YearlyPass) {
            setAccess(moment().diff(expire, "year") < 1);
          } else {
            setAccess(false);
          }
        }
      })
      .finally(() => setLoading(false));
  });

  return (
    <>
      <div style={center}>
        {loading && (
          <Center>
            <Loader variant="bars" />
          </Center>
        )}
        {!loading && access && (
          <>
            <div>Congratulation</div>
            <div>
              You have access to this page with {getTokenFullName(token)}
            </div>
          </>
        )}
        {!loading && !access && <div>You have no access to this page</div>}
      </div>
    </>
  );
};

export default PassTokenCheck;
