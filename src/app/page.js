import AddUsers from './components/AddUsers';
import DisplayUsers from './components/DisplayUsers';

export default function Home() {
  return (
    <main style={{ padding: '10px 20px' }}>
      <AddUsers />
      <DisplayUsers />
    </main>
  );
}
