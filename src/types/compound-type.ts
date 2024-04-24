import {PriceState} from "@/stores/price-slice";
import {CarpetUpholsteryState} from "@/stores/services/carpet-upholstery-slice";
import {RugState} from "@/stores/services/rug-slice";

export type CompoundType = PriceState & CarpetUpholsteryState & RugState