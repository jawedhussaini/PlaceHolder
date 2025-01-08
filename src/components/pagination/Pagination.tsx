'use client';

import { Pagination } from '@mantine/core';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Paginations({ totalPagess }: { totalPagess: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`,{ scroll: false });
  };

  return (
    <Pagination
      total={totalPagess}
      value={currentPage}
      onChange={handlePageChange}
    />
  );
}
