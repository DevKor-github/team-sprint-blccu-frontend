import Link from 'next/link';

const check = () => {
  return (
    <div>
      <h1>Check</h1>
      <Link href="/write">Go to Write</Link>
    </div>
  );
};

export default check;
