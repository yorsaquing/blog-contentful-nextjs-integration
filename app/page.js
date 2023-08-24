import Image from 'next/image'
import styles from './page.module.css'
import { client } from './lib/contentful'

export default async function Home() {
  const links = await client.getEntries({
    content_type: "componentLink",
    // you can use the `select` key to choose what fields to return
    // select: ["fields", "sys"]
  })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {links.items.map((link) => {
          return <a
            href={link.fields.hrefSt}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            key={link.sys.id}
          >
            <h2>
              {link.fields.titleSt} <span>-&gt;</span>
            </h2>
            <p>{link.fields.descriptionSt}.</p>
          </a>
        })}
      </div>
    </main>
  )
}