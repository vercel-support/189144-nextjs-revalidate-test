export default async function handler(req, res) {
  const path = '/what-time';

  try {
    console.log(`Revalidating ${path}...`);
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
