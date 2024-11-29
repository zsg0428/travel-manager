import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";
import {TitleSection} from "@/app/_components/TitleSection";


export const metadata = {
    title: 'Train page',
    description: 'Train page'
}
const Page = () => {
    return <PageLayout>
        <TitleSection>Train
            <p><span className='text-yellow-500'>

            Time:
        </span> Tue. Dec. 24, 2024 </p>
            <p> <span className='text-yellow-500'>Location:</span> Union Station</p>
        </TitleSection>
        <PageLayout>
            <People name='Mavis' section='train' mtq='/train/minxian-via.pdf'
            />
            <People name='Dempsey' section='train' mtq='/train/shengge-via.pdf'
            />
        </PageLayout>
    </PageLayout>


}

export default Page