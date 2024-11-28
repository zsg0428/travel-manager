import {People} from "@/app/_components/People";
import {PageLayout} from "@/app/_components/PageLayout";


export const metadata = {
    title: 'Train page',
    description: 'Train page'
}
const Page = () => {
    return <>
        <h1 className='text-center text-2xl underline'>Train
            <p><span className='text-yellow-500'>

            Time:
        </span> Tue. Dec. 24, 2024 </p>
            <p> <span className='text-yellow-500'>Location:</span> Union Station</p>
        </h1>
        <PageLayout>
            <People name='Mavis' section='train' mtq='/train/minxian-via.pdf'
            />
            <People name='Dempsey' section='train' mtq='/train/shengge-via.pdf'
            />
        </PageLayout>
    </>


}

export default Page