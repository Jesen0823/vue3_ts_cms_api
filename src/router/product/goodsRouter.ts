import Router from '@koa/router'

import {
  verifyAuth,
  verifyCUInfo,
  verifyForbid
} from '@/middleware/verifyMiddleware'
import goodsController from '@/controller/product/goods/goodsController'
import categoryController from '@/controller/product/category/categoryController'

const goodsRouter = new Router({ prefix: '/goods' })

goodsRouter.post('/', verifyAuth, verifyCUInfo, goodsController.create)
goodsRouter.delete(
  '/:goodsId',
  verifyAuth,
  verifyForbid,
  goodsController.delete
)
goodsRouter.patch(
  '/:goodsId',
  verifyAuth,
  verifyForbid,
  verifyCUInfo,
  goodsController.update
)
goodsRouter.get('/:goodsId', verifyAuth, goodsController.detail)
goodsRouter.post('/list', verifyAuth, goodsController.list)

// 统计数据
goodsRouter.get('/amount/list', verifyAuth, goodsController.amountList)
goodsRouter.get('/address/sale', verifyAuth, goodsController.addressSale)

// 分类统计数据（兼容客户端请求路径 /api/goods/category/count）
goodsRouter.get('/category/count', verifyAuth, categoryController.goodsCount)
goodsRouter.get('/category/sale', verifyAuth, categoryController.goodsSale)
goodsRouter.get('/category/favor', verifyAuth, categoryController.goodsFavor)

export default goodsRouter
