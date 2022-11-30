import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export default function PostList( { allPostsDataArray } ){
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsDataArray.map(( {id, title, date} ) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
        </section>
    );
}