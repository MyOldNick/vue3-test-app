//vue
import { Ref } from "vue";

export interface IStore {
    API: string,
    API_KEY: string,
    currentCurrency: Ref<string>,
    allСurrencies: Ref<Array<string>>,
    rates: IRates,
    getHistoricalData: (from: string, to: string) => Promise<void>,
    setCurrentCurrency: (currency: string) => void,
    clearRates: () => void

}

export interface IRates {
    [key: string]: {
        [key: string]: number
    }
}