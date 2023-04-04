import { AllCategoriesValue } from "../component/Categories"
import { PageSetting } from "../type/type"

export const createPageSetting = (start:number,end:number, size:number, category: AllCategoriesValue ) : PageSetting => {
    return {
      requestSize: size,
      requestCategory: category,
      requestPageStart: start,
      requestPageEnd: end,
    }
  }

