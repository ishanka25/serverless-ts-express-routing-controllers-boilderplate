import { JsonController, Get } from "routing-controllers";

@JsonController('/test')
export class TestController {

    @Get('/')
    async test() {
      return {
          Success: true
      }
    }

}
