import {Grid2} from "@mui/material";

export const PageLayout = ({children}) => {

    return <Grid2 container rowSpacing={2} columnSpacing={2} size={11}>
        {children}
    </Grid2>



}