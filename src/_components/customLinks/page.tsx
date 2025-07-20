import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface MenuItem {
  id: number;
  slug: string;
  title: string;
  type: string;
}

export default function CustomLinks() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://api.dubaidaytrips.com/v1/menus?tenant_id=58&language_id=51');
        const data = await res.json();
        setMenuItems(data.rows || []);
        console.log(data.rows);
      } catch {
        setError('Failed to fetch menu items');
      } finally {
        setLoading(false);
      }
    };
    fetchMenus();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255,255,255,0.85)',
        zIndex: 9999
      }}>
        <ClipLoader color="#C19A6B" size={80} />
      </div>
    );
  }

  const firstThree = menuItems.slice(0, 3);
  const remaining = menuItems.slice(3);

  return (
    <div className="md:flex items-center gap-6">
      <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
        {firstThree.map((item) => (
          <li key={item.id} className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
            <Link
              href={item.slug || '/'}
              className="text-[#10221B] hover:text-[#C19A6B] text-[12px] font-bold transition duration-200 tracking-wide px-3"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mx-4 my-2 md:my-0">
        <Image src="/Link.svg" alt="Logo" width={150} height={100} className="w-[150px] md:w-[210px] object-contain" />
      </div>

      <ul className="md:flex gap-4 text-[14px] font-[500] text-black">
        {remaining.map((item) => (
          <li key={item.id} className="hover:text-[#C19A6B] py-2 hover:underline duration-200">
            <Link
              href={item.slug || '/'}
              className="text-[#10221B] hover:text-[#C19A6B] text-[12px] font-bold transition duration-200 tracking-wide px-3"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}