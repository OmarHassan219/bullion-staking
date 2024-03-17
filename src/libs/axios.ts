/*
 * Copyright (c) 2024, Bullion-Staking  All rights reserved.
 * For license. See license.txt
*/

import axios from 'axios'

const baseURL = 'https://api.bullionstaking.com/v1/'
// 'https://node-server.afkkarr.com/v1/'

export const axiosInstance = axios.create({
  baseURL,
})