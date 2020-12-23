import React from "react";
import { EachAlgCard, Algorithms } from "./AlgsElement";
import moment from "moment";
import { DataGrid } from "@material-ui/data-grid";

const AlgCard = ({ PLL: { nameAlg, id, recogn, alglist } }) => {
    console.log("Alglist", alglist);
    return (
        <>
            <EachAlgCard>
                <p>{nameAlg}</p>
                <p>{recogn}</p>
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
            </EachAlgCard>
        </>
    );
};

export default AlgCard;
