//Dynamic page
import { useRouter } from 'next/router';

import React from "react";

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;
    // URL에 있는 구체적인 값이 저장된다.
    // 필요한 이유 : send a request to the backend API. to fetch the news item with newId.

    return <h1>The Detail Page</h1>
}

export default DetailPage;