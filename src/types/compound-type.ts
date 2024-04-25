import {PriceState} from "@/stores/price-slice";
import {CarpetUpholsteryState} from "@/stores/services/carpet-upholstery-slice";
import {RugState} from "@/stores/services/rug-slice";
import {ScheduleState} from "@/stores/schedule-slice";
import {ContactState} from "@/stores/contact-slice";
import {SharedState} from "@/stores/shared-slice";

export type CompoundType = PriceState & CarpetUpholsteryState & RugState & ScheduleState & ContactState & SharedState;