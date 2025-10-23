import { getAllPhotos } from '@/lib/image-data';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const data = await getAllPhotos();

  return NextResponse.json(data);
};
