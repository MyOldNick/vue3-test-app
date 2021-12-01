//vue
import { ref, reactive } from "vue";
//interfaces
import { IStore, IRates } from "@/interfaces";


class Store implements IStore {
    API = 'https://freecurrencyapi.net/api/v2/'
    API_KEY = "f47dab30-51f5-11ec-b793-7915357cb7ba"

    currentCurrency = ref("")
    allСurrencies = ref<Array<string>>([])
    rates: IRates = reactive({})

    getHistoricalData = async (from: string, to: string) => {

        const response = await fetch(`${this.API}historical?apikey=${this.API_KEY}&date_from=${from}&date_to=${to}`)

        const { data }: IRates = await response.json()

        if (this.allСurrencies.value.length <= 0) {

            this.allСurrencies.value = Object.keys(data[from])

        }

        this.clearRates()

        Object.assign(this.rates, data)

    }


    setCurrentCurrency = (currency: string) => this.currentCurrency.value = currency


    clearRates = () => Object.keys(this.rates).forEach(key => delete this.rates[key])

}


export default new Store()