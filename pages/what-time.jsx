export async function getStaticProps() {
  const res = await fetch(
    'https://nextjs-time-api.vercel-support.app/api/time'
  );
  const { now } = await res.json();
  return { props: { now } };
}

export default function Page({ now }) {
  return (
    <div>
      <h1>What time is it?</h1>
      <p>{now}</p>
    </div>
  );
}
