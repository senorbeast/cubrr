//import Navbar from "../Navbar";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { HeadCard } from './AlgsElement';
import AlgCard from './AlgCard';

interface PLLinfo {
    nameAlg: string;
    id: string;
    recogn: string;
    alglist: any;
}

export default function AlgsPage() {
    const { loading, data } = useQuery(FETCH_PLL_Query);
    console.log('DAta', data);
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
                data.getPLLs.map((PLL: PLLinfo) => <AlgCard key={PLL.id} PLL={PLL} />)
            )}
            {/* </AlgCardContainer> */}
        </>
    );
}

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
