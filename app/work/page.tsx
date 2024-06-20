import Work from './work';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Work | Aman Agarwal',
};

export default async function WorkPage() {
    return (
        <Work />
    )
}
