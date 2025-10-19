import dynamic from 'next/dynamic';

const Home = dynamic(
  () => import('@/pages/home'),
  { ssr: true }
);
export default function Page () {
  return (
    <Home></Home>
  );
}
