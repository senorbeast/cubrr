import React from "react";
import {
    EachAlgCard,
    Algorithms,
    SubContainer,
    SubContainer2,
    FlexRow,
} from "./algsElement";
// import moment from "moment";
import { DataGrid } from "@material-ui/data-grid";
import PLLImg from "./PLL-step.png";
import Typography from "@material-ui/core/Typography";

const AlgCard = ({ PLL: { nameAlg, id, recogn, alglist } }) => {
    console.log("Alglist", alglist);
    return (
        <>
            <EachAlgCard>
                <FlexRow>
                    <SubContainer>
                        <img
                            src={PLLImg}
                            alt="PLL"
                            width="280"
                            height="280"
                            style={{ margin: "none", padding: "none" }}
                        ></img>
                    </SubContainer>
                    <SubContainer2>
                        <Typography variant="h4" gutterBottom>
                            {nameAlg}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Recognition: {recogn}
                        </Typography>
                        {/* <p>{JSON.stringify(alglist)}</p> */}
                        <div style={{ height: 180, width: "100%" }}>
                            <DataGrid
                                rowHeight={25}
                                hideFooter={true}
                                autoHeight={true}
                                columns={[
                                    {
                                        field: "alg",
                                        width: "90%",
                                        headerName: "Algorithm",
                                        sortable: false,
                                    },
                                    {
                                        field: "rating",
                                        width: "10%",
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
