/** @format */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // if (
  //   req.nextUrl.pathname === '/' ||
  //   req.nextUrl.pathname === '/caseInsert/inquiry' ||
  //   req.nextUrl.pathname === '/caseInsert/personInfo' ||
  //   req.nextUrl.pathname === '/caseInsert/carInfo'
  // ) {
  //   const token = localStorage.getItem('token')
  //   console.log(token)
  //   if (token) {
  //     return NextResponse.redirect(new URL('/Login', req.url))
  //   }
  // }
  // if (req.nextUrl.pathname === '/Login') {
  //   const cookie = req.cookies.get('CTFlEoiSHkeNnToMBLiShoOekn3kN2y@k' || '')
  //   if (cookie) {
  //     return NextResponse.redirect(new URL(`/profile`, req.url))
  //   }
  // }
}
