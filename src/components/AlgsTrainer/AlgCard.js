import React from "react";
import { EachAlgCard } from "./AlgsElement";
import moment from "moment";

const AlgCard = ({ PLL: { nameAlg, id, recogn, alglist } }) => {
    return (
        <>
        <EachAlgCard>
            <p>{nameAlg}</p>
            <p>{recogn}</p>
            {alglist.map((algle) => {
                <p>{JSON.stringify(algle)}</p>;
            })}
        </EachAlgCard>
        </>
    );
};

export default AlgCard;
