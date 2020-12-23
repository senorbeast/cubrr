import React from "react";
import {
    EachAlgCard,
    Algorithms,
    SubContainer,
    SubContainer2,
    FlexRow,
} from "./algsElement";
import moment from "moment";
import { DataGrid } from "@material-ui/data-grid";
import PLLImg from "./PLL-step.png";

const AlgCard = ({ PLL: { nameAlg, id, recogn, alglist } }) => {
    console.log("Alglist", alglist);
    return (
        <>
            <EachAlgCard>
                <FlexRow>
                    <SubContainer>
                        <img src={PLLImg} alt="PLL"></img>
                    </SubContainer>
                    <SubContainer2>
                        <h1>{nameAlg}</h1>
                        <h4>Recognition:{recogn}</h4>
                        {/* <p>{JSON.stringify(alglist)}</p> */}
                        <div style={{ height: 250, width: "100%" }}>
                            <DataGrid
                                hideFooter={true}
                                autoHeight={true}
                                columns={[
                                    {
                                        field: "alg",
                                        flex: 1,
                                        headerName: "Algorithm",
                                        sortable: false,
                                    },
                                    {
                                        field: "rating",
                                        flex: 0.2,
                                        headerName: "Ratings",
                                    },
                                ]}
                                rows={alglist}
                            />
                        </div>
                    </SubContainer2>
                </FlexRow>
            </EachAlgCard>
        </>
    );
};

export default AlgCard;
