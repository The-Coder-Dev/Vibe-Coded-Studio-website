'use client'
import { Button } from './ui/button'
import Link from 'next/link'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


const CallBookButton = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "book-a-call" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <Button data-cal-namespace="book-a-call" data-cal-link="theojasstudio/book-a-call" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' asChild variant={'secondary'} size={"lg"} className='text-sm px-4 py-3 rounded-xl border border-destructive/20'>
            <Link href="/" className=''>Book a call</Link>
        </Button>
    )
}

export default CallBookButton