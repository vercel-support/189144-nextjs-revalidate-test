export async function getStaticProps() {
  console.log('getStaticProps: fetching current time from server...');
  const res = await fetch(
    'https://nextjs-time-api.vercel-support.app/api/time'
  );

  const { now } = await res.json();
  console.log(`time is ${now}`);
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
