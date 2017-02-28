import {API_HOST} from './env'


export const getProfits = () => fetch(`${API_HOST}/reports?profits`)

export const getMargin = () => fetch(`${API_HOST}/reports?grossProfitMargin`)

export const getExpenses = () => fetch(`${API_HOST}/reports?totalExpenses`)

export const getTotalRevenue = () => fetch(`${API_HOST}/reports?totalRev`)

export const getTopClients = () => fetch(`${API_HOST}/reports?topClients`)

export const getSalesTable = () => fetch(`${API_HOST}/reports?tableChart`)

export const getAverageDeal = () => fetch(`${API_HOST}/reports?avgDealSize`)

export const getSalesCostsProfits = () => fetch(`${API_HOST}/reports?barChartQuery`)

export const getGoalsAcheived = () => fetch(`${API_HOST}/reports?goalsAchieved`)

export const getGoals = () => fetch(`${API_HOST}/reports?goalGauge`)
