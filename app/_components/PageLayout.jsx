import {Grid2} from "@mui/material";

export const PageLayout = ({children}) => {

    return <Grid2 className='mx-auto' container rowSpacing={2} columnSpacing={2} size={11}>
        {children}
    </Grid2>




}