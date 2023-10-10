import { rest } from 'msw';

/*     UN_ORDER(0, 未下单/未激活),
    NORMAL(1, 已下单/激活),
    EXPIRE_ORDER(2, 到期), */

export const handlers = [
  // 开发服务器和测试用例的 api mock接口
  rest.post('/restapi/demo', (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.json({
        data: {},
        success: true,
      }),
    );
  }),
];
