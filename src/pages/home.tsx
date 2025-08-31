'use client';
import { MenuTypeEnum } from '@/client-app/constants/menu.data';
import { redirect } from 'next/navigation';


export default function Home () {

  redirect(MenuTypeEnum.EXAM_LIST);
}

