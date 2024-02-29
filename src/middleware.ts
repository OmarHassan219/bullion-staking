/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import { i18nConfig } from '../next.config.mjs';


export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// Applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};