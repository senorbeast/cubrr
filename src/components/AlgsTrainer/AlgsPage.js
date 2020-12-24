import React from "react";
//import Navbar from "../Navbar";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { AlgCardContainer, HeadCard } from "./algsElement";
import AlgCard from "./AlgCard";

export const AlgsPage = (props) => {
    const { loading, data } = useQuery(FETCH_PLL_Query);
    return (
        <>
            {/* <AlgCardContainer> */}
            <HeadCard>
                <h1>Algs from Database</h1>
            </HeadCard>
            {loading ? (
                <h1>Loading PLLs.....</h1>
            ) : (
                data.getPLLs &&
                data.getPLLs.map((PLL) => <AlgCard key={PLL.id} PLL={PLL} />)
            )}
            {/* </AlgCardContainer> */}
        </>
    );
};

const FETCH_PLL_Query = gql`
    {
        getPLLs {
            nameAlg
            id
            recogn
            alglist {
                id
                alg
                rating {
                    username
                }
            }
        }
    }
`;
