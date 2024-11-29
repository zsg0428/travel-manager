import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {Grid2} from "@mui/material";
import {TitleSection} from "@/app/_components/TitleSection";


export const metadata = {
    title: 'Bus page',
    description: 'bus page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>Bus</TitleSection>
        {/*<PageLayout>*/}

            <People name='Mavis' section='bus' mtq='/bus/Montreal-Quebec/M-Q-Minxian.pdf'
                    qtm='/bus/Quebec-Montreal/Q-M-Minxian.pdf'/>
            <People name='Dempsey' section='bus' mtq='/bus/Montreal-Quebec/M-Q-Shengge.pdf'
                    qtm='/bus/Quebec-Montreal/Q-M-Shengge.pdf'/>
        {/*</PageLayout>*/}
    </PageLayout>


}

export default Page