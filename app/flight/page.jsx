import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {TitleSection} from "@/app/_components/TitleSection";


export const metadata = {
    title: 'Flight page',
    description: 'bus page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>Flight</TitleSection>
        <People name='Confirmation' section='flight' mtq='/flight/flight1.pdf'
        />
        <People name='Expedia Confirmation' section='flight' mtq='/flight/flight-expedia.pdf'
                qtm='/bus/Quebec-Montreal/Q-M-Shengge.pdf'/>
    </PageLayout>


}

export default Page