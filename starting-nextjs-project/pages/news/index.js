// our-domain.com/news
import {Fragment} from "react";
import Link from 'next/link';

function NewsPage() {
  return (
     <Fragment>
       <h1>The News Page</h1>
       <ul>
          <li>
            <Link href='/news/nextjs-is-a-great-framework'>
              NestJS is a great Framework.
            </Link>
          </li>
          <li>Something else</li>
       </ul>
    </Fragment>
  );
}

export default NewsPage;