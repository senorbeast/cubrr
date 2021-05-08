import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';
import { EachAlgCard, SubContainer, SubContainer2, FlexRow } from './AlgsElement';
// import moment from "moment";
import PLLImg from './PLL-step.png';

interface PLLinfo {
    nameAlg: string;
    id: string;
    recogn: string;
    alglist: any;
}
interface PLLCard {
    PLL: PLLinfo;
}

const AlgCard = ({ PLL: { nameAlg, recogn, alglist } }: PLLCard) => {
    //console.log("Alglist", alglist);
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
                            style={{ margin: 'none', padding: 'none' }}
                        />
                    </SubContainer>
                    <SubContainer2>
                        <Typography variant="h4" gutterBottom>
                            {nameAlg}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Recognition: {recogn}
                        </Typography>
                        {/* <p>{JSON.stringify(alglist)}</p> */}
                        <div style={{ height: 180, width: '100%' }}>
                            <DataGrid
                                rowHeight={25}
                                hideFooter
                                autoHeight
                                columns={[
                                    {
                                        field: 'alg',
                                        headerName: 'Algorithm',
                                        flex: 1,
                                        sortable: false,
                                    },
                                    {
                                        field: 'rating',
                                        width: 92,
                                        headerName: 'Ratings',
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
