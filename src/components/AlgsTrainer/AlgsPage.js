import React from "react";
import Navbar from "../Navbar";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const AlgsPage = (props) => {
    const { loading, data } = useQuery(FETCH_PLL_Query);

    if (data) {
        console.log(data);
    }
    return (
        <>
            <h1>Algs from Database</h1>
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
                alg
                rating {
                    username
                }
            }
        }
    }
`;
